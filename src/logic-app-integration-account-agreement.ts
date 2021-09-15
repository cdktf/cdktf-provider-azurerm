// https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicAppIntegrationAccountAgreementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#agreement_type LogicAppIntegrationAccountAgreement#agreement_type}
  */
  readonly agreementType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#content LogicAppIntegrationAccountAgreement#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#guest_partner_name LogicAppIntegrationAccountAgreement#guest_partner_name}
  */
  readonly guestPartnerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#host_partner_name LogicAppIntegrationAccountAgreement#host_partner_name}
  */
  readonly hostPartnerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#integration_account_name LogicAppIntegrationAccountAgreement#integration_account_name}
  */
  readonly integrationAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#metadata LogicAppIntegrationAccountAgreement#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#name LogicAppIntegrationAccountAgreement#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#resource_group_name LogicAppIntegrationAccountAgreement#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * guest_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#guest_identity LogicAppIntegrationAccountAgreement#guest_identity}
  */
  readonly guestIdentity: LogicAppIntegrationAccountAgreementGuestIdentity[];
  /**
  * host_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#host_identity LogicAppIntegrationAccountAgreement#host_identity}
  */
  readonly hostIdentity: LogicAppIntegrationAccountAgreementHostIdentity[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#timeouts LogicAppIntegrationAccountAgreement#timeouts}
  */
  readonly timeouts?: LogicAppIntegrationAccountAgreementTimeouts;
}
export interface LogicAppIntegrationAccountAgreementGuestIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#qualifier LogicAppIntegrationAccountAgreement#qualifier}
  */
  readonly qualifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#value LogicAppIntegrationAccountAgreement#value}
  */
  readonly value: string;
}

function logicAppIntegrationAccountAgreementGuestIdentityToTerraform(struct?: LogicAppIntegrationAccountAgreementGuestIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LogicAppIntegrationAccountAgreementHostIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#qualifier LogicAppIntegrationAccountAgreement#qualifier}
  */
  readonly qualifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#value LogicAppIntegrationAccountAgreement#value}
  */
  readonly value: string;
}

function logicAppIntegrationAccountAgreementHostIdentityToTerraform(struct?: LogicAppIntegrationAccountAgreementHostIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface LogicAppIntegrationAccountAgreementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#create LogicAppIntegrationAccountAgreement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#delete LogicAppIntegrationAccountAgreement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#read LogicAppIntegrationAccountAgreement#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html#update LogicAppIntegrationAccountAgreement#update}
  */
  readonly update?: string;
}

function logicAppIntegrationAccountAgreementTimeoutsToTerraform(struct?: LogicAppIntegrationAccountAgreementTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html azurerm_logic_app_integration_account_agreement}
*/
export class LogicAppIntegrationAccountAgreement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_logic_app_integration_account_agreement";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/logic_app_integration_account_agreement.html azurerm_logic_app_integration_account_agreement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicAppIntegrationAccountAgreementConfig
  */
  public constructor(scope: Construct, id: string, config: LogicAppIntegrationAccountAgreementConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_logic_app_integration_account_agreement',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._agreementType = config.agreementType;
    this._content = config.content;
    this._guestPartnerName = config.guestPartnerName;
    this._hostPartnerName = config.hostPartnerName;
    this._integrationAccountName = config.integrationAccountName;
    this._metadata = config.metadata;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._guestIdentity = config.guestIdentity;
    this._hostIdentity = config.hostIdentity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agreement_type - computed: false, optional: false, required: true
  private _agreementType: string;
  public get agreementType() {
    return this.getStringAttribute('agreement_type');
  }
  public set agreementType(value: string) {
    this._agreementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementTypeInput() {
    return this._agreementType
  }

  // content - computed: false, optional: false, required: true
  private _content: string;
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // guest_partner_name - computed: false, optional: false, required: true
  private _guestPartnerName: string;
  public get guestPartnerName() {
    return this.getStringAttribute('guest_partner_name');
  }
  public set guestPartnerName(value: string) {
    this._guestPartnerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guestPartnerNameInput() {
    return this._guestPartnerName
  }

  // host_partner_name - computed: false, optional: false, required: true
  private _hostPartnerName: string;
  public get hostPartnerName() {
    return this.getStringAttribute('host_partner_name');
  }
  public set hostPartnerName(value: string) {
    this._hostPartnerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPartnerNameInput() {
    return this._hostPartnerName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // integration_account_name - computed: false, optional: false, required: true
  private _integrationAccountName: string;
  public get integrationAccountName() {
    return this.getStringAttribute('integration_account_name');
  }
  public set integrationAccountName(value: string) {
    this._integrationAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationAccountNameInput() {
    return this._integrationAccountName
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable;
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // guest_identity - computed: false, optional: false, required: true
  private _guestIdentity: LogicAppIntegrationAccountAgreementGuestIdentity[];
  public get guestIdentity() {
    return this.interpolationForAttribute('guest_identity') as any;
  }
  public set guestIdentity(value: LogicAppIntegrationAccountAgreementGuestIdentity[]) {
    this._guestIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guestIdentityInput() {
    return this._guestIdentity
  }

  // host_identity - computed: false, optional: false, required: true
  private _hostIdentity: LogicAppIntegrationAccountAgreementHostIdentity[];
  public get hostIdentity() {
    return this.interpolationForAttribute('host_identity') as any;
  }
  public set hostIdentity(value: LogicAppIntegrationAccountAgreementHostIdentity[]) {
    this._hostIdentity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdentityInput() {
    return this._hostIdentity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LogicAppIntegrationAccountAgreementTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LogicAppIntegrationAccountAgreementTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agreement_type: cdktf.stringToTerraform(this._agreementType),
      content: cdktf.stringToTerraform(this._content),
      guest_partner_name: cdktf.stringToTerraform(this._guestPartnerName),
      host_partner_name: cdktf.stringToTerraform(this._hostPartnerName),
      integration_account_name: cdktf.stringToTerraform(this._integrationAccountName),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      guest_identity: cdktf.listMapper(logicAppIntegrationAccountAgreementGuestIdentityToTerraform)(this._guestIdentity),
      host_identity: cdktf.listMapper(logicAppIntegrationAccountAgreementHostIdentityToTerraform)(this._hostIdentity),
      timeouts: logicAppIntegrationAccountAgreementTimeoutsToTerraform(this._timeouts),
    };
  }
}
