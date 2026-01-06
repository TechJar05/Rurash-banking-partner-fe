/**
 * RURASH PARTNER PORTAL - WORKFLOW CONSTANTS
 *
 * This file defines the complete case lifecycle workflow and
 * maps internal stages to Bank User visible phases.
 *
 * IMPORTANT: Bank Users have LIMITED access and can ONLY:
 * - Add client referrals
 * - View high-level status and progress
 * - Chat with assigned RM
 *
 * Bank Users CANNOT:
 * - Upload documents
 * - View financials
 * - Create cases
 * - Approve anything
 * - Access internal workflow details
 */

// ============================================================
// BANK USER VISIBLE PHASES (High-Level Only)
// ============================================================

export const BANK_USER_PHASES = {
  INITIATED: {
    id: 1,
    key: 'initiated',
    name: 'Initiated',
    description: 'Referral submitted and under initial review',
    color: 'blue'
  },
  VALUATION: {
    id: 2,
    key: 'valuation',
    name: 'Valuation',
    description: 'Case is being valued and quotation prepared',
    color: 'purple'
  },
  PAYMENT: {
    id: 3,
    key: 'payment',
    name: 'Payment',
    description: 'Awaiting client payment and confirmation',
    color: 'orange'
  },
  EXECUTION: {
    id: 4,
    key: 'execution',
    name: 'Execution',
    description: 'Documentation and verification in progress',
    color: 'blue'
  },
  COMPLETED: {
    id: 5,
    key: 'completed',
    name: 'Completed',
    description: 'Case successfully closed',
    color: 'green'
  }
};

// Array format for easy iteration
export const BANK_USER_PHASES_LIST = Object.values(BANK_USER_PHASES);

// ============================================================
// INTERNAL WORKFLOW STAGES (NOT visible to Bank Users)
// ============================================================

export const INTERNAL_STAGES = {
  // Phase: INITIATED
  REFERRAL_RECEIVED: {
    id: 'referral_received',
    name: 'Referral Received',
    phase: 'initiated',
    description: 'New referral submitted by Bank User'
  },
  RM_REVIEW: {
    id: 'rm_review',
    name: 'Sales RM Review',
    phase: 'initiated',
    description: 'Sales RM reviewing referral details'
  },
  VALUATOR_ASSIGNMENT: {
    id: 'valuator_assignment',
    name: 'Valuator Assignment',
    phase: 'initiated',
    description: 'Case assigned to valuator'
  },

  // Phase: VALUATION
  VALUATION_IN_PROGRESS: {
    id: 'valuation_in_progress',
    name: 'Valuation In Progress',
    phase: 'valuation',
    description: 'Valuator performing case valuation'
  },
  QUOTATION_PREPARATION: {
    id: 'quotation_preparation',
    name: 'Quotation Preparation',
    phase: 'valuation',
    description: 'Preparing quotation for client'
  },
  DISCOUNT_APPROVAL: {
    id: 'discount_approval',
    name: 'Discount Approval',
    phase: 'valuation',
    description: 'Awaiting discount approval if threshold exceeded'
  },
  QUOTATION_SENT: {
    id: 'quotation_sent',
    name: 'Quotation Sent to Client',
    phase: 'valuation',
    description: 'Quotation sent, awaiting client acceptance'
  },

  // Phase: PAYMENT
  QUOTATION_ACCEPTED: {
    id: 'quotation_accepted',
    name: 'Quotation Accepted',
    phase: 'payment',
    description: 'Client accepted the quotation'
  },
  ADVANCE_PAYMENT_PENDING: {
    id: 'advance_payment_pending',
    name: 'Advance Payment Pending',
    phase: 'payment',
    description: 'Awaiting advance payment from client'
  },
  PAYMENT_VERIFIED: {
    id: 'payment_verified',
    name: 'Payment Verified',
    phase: 'payment',
    description: 'Payment received and verified'
  },
  CLIENT_ACCESS_ENABLED: {
    id: 'client_access_enabled',
    name: 'Client Access Enabled',
    phase: 'payment',
    description: 'System access granted to client'
  },

  // Phase: EXECUTION
  HANDOVER_TO_OPS: {
    id: 'handover_to_ops',
    name: 'Handover to Operations',
    phase: 'execution',
    description: 'Case handed over to Case Manager & Ops RM'
  },
  DOCUMENTATION: {
    id: 'documentation',
    name: 'Documentation Collection',
    phase: 'execution',
    description: 'Collecting and verifying documents'
  },
  VERIFICATION: {
    id: 'verification',
    name: 'Verification',
    phase: 'execution',
    description: 'Final verification of all documents'
  },
  FINAL_EXECUTION: {
    id: 'final_execution',
    name: 'Final Execution',
    phase: 'execution',
    description: 'Executing final procedures'
  },

  // Phase: COMPLETED
  CASE_CLOSED: {
    id: 'case_closed',
    name: 'Case Closed',
    phase: 'completed',
    description: 'Case successfully completed'
  }
};

// ============================================================
// INTERNAL ROLES (NOT visible to Bank Users)
// ============================================================

export const INTERNAL_ROLES = {
  SALES_RM: {
    id: 'sales_rm',
    name: 'Sales RM',
    description: 'Reviews referrals, coordinates with valuator, handles client communication'
  },
  VALUATOR: {
    id: 'valuator',
    name: 'Valuator',
    description: 'Performs valuation and prepares quotations'
  },
  APPROVER: {
    id: 'approver',
    name: 'Approver',
    description: 'Approves discounts when thresholds are exceeded'
  },
  CASE_MANAGER: {
    id: 'case_manager',
    name: 'Case Manager',
    description: 'Manages documentation and verification'
  },
  OPS_RM: {
    id: 'ops_rm',
    name: 'Operations RM',
    description: 'Handles operations and execution'
  }
};

// ============================================================
// BANK USER PERMISSIONS (Strictly Limited)
// ============================================================

export const BANK_USER_PERMISSIONS = {
  // ALLOWED actions
  CAN_SUBMIT_REFERRAL: true,
  CAN_VIEW_REFERRAL_STATUS: true,
  CAN_CHAT_WITH_RM: true,
  CAN_VIEW_CLIENT_LIST: true,
  CAN_VIEW_HIGH_LEVEL_PROGRESS: true,

  // PROHIBITED actions
  CAN_UPLOAD_DOCUMENTS: false,
  CAN_VIEW_FINANCIALS: false,
  CAN_CREATE_CASES: false,
  CAN_APPROVE_ANYTHING: false,
  CAN_VIEW_INTERNAL_STAGES: false,
  CAN_EDIT_CASE_DETAILS: false,
  CAN_VIEW_VALUATIONS: false,
  CAN_VIEW_QUOTATIONS: false,
  CAN_ACCESS_OPERATIONS: false
};

// ============================================================
// STATUS MAPPINGS (Internal Status -> Bank User Display)
// ============================================================

export const STATUS_DISPLAY = {
  // Active statuses
  'in_progress': {
    label: 'In Progress',
    color: 'bg-blue-100 text-blue-700',
    description: 'Case is being processed'
  },
  'pending': {
    label: 'Pending',
    color: 'bg-yellow-100 text-yellow-700',
    description: 'Awaiting action'
  },
  'action_required': {
    label: 'Action Required',
    color: 'bg-orange-100 text-orange-700',
    description: 'Requires your attention'
  },
  'on_hold': {
    label: 'On Hold',
    color: 'bg-gray-100 text-gray-700',
    description: 'Case temporarily paused'
  },

  // Completed statuses
  'completed': {
    label: 'Completed',
    color: 'bg-green-100 text-green-700',
    description: 'Successfully completed'
  },
  'closed': {
    label: 'Closed',
    color: 'bg-green-100 text-green-700',
    description: 'Case closed'
  }
};

// ============================================================
// HELPER FUNCTIONS
// ============================================================

/**
 * Maps an internal stage to Bank User visible phase
 * @param {string} internalStageId - The internal stage ID
 * @returns {object} The Bank User visible phase
 */
export const mapInternalStageToPhase = (internalStageId) => {
  const stage = Object.values(INTERNAL_STAGES).find(s => s.id === internalStageId);
  if (!stage) return BANK_USER_PHASES.INITIATED;

  const phaseKey = stage.phase.toUpperCase();
  return BANK_USER_PHASES[phaseKey] || BANK_USER_PHASES.INITIATED;
};

/**
 * Calculates progress percentage for Bank User display
 * @param {string} currentPhaseKey - Current phase key (initiated, valuation, etc.)
 * @returns {number} Progress percentage (0-100)
 */
export const calculateBankUserProgress = (currentPhaseKey) => {
  const progressMap = {
    'initiated': 20,
    'valuation': 40,
    'payment': 60,
    'execution': 80,
    'completed': 100
  };
  return progressMap[currentPhaseKey] || 0;
};

/**
 * Gets phases with status for display
 * @param {string} currentPhaseKey - Current phase key
 * @returns {array} Array of phases with status
 */
export const getPhasesWithStatus = (currentPhaseKey) => {
  const currentPhase = BANK_USER_PHASES[currentPhaseKey?.toUpperCase()];
  const currentId = currentPhase?.id || 1;

  return BANK_USER_PHASES_LIST.map(phase => ({
    ...phase,
    status: phase.id < currentId ? 'completed'
          : phase.id === currentId ? 'in-progress'
          : 'pending',
    step: phase.id.toString()
  }));
};

/**
 * Gets simplified status for Bank User display
 * @param {string} internalStatus - Internal status
 * @returns {object} Simplified status object
 */
export const getDisplayStatus = (internalStatus) => {
  const normalized = internalStatus?.toLowerCase().replace(/\s+/g, '_');
  return STATUS_DISPLAY[normalized] || STATUS_DISPLAY['in_progress'];
};