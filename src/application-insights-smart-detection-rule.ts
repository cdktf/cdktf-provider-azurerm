// https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationInsightsSmartDetectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html#additional_email_recipients ApplicationInsightsSmartDetectionRule#additional_email_recipients}
  */
  readonly additionalEmailRecipients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html#application_insights_id ApplicationInsightsSmartDetectionRule#application_insights_id}
  */
  readonly applicationInsightsId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html#enabled ApplicationInsightsSmartDetectionRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html#name ApplicationInsightsSmartDetectionRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html#send_emails_to_subscription_owners ApplicationInsightsSmartDetectionRule#send_emails_to_subscription_owners}
  */
  readonly sendEmailsToSubscriptionOwners?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html#timeouts ApplicationInsightsSmartDetectionRule#timeouts}
  */
  readonly timeouts?: ApplicationInsightsSmartDetectionRuleTimeouts;
}
export interface ApplicationInsightsSmartDetectionRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html#create ApplicationInsightsSmartDetectionRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html#delete ApplicationInsightsSmartDetectionRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html#read ApplicationInsightsSmartDetectionRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html#update ApplicationInsightsSmartDetectionRule#update}
  */
  readonly update?: string;
}

function applicationInsightsSmartDetectionRuleTimeoutsToTerraform(struct?: ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference | ApplicationInsightsSmartDetectionRuleTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html azurerm_application_insights_smart_detection_rule}
*/
export class ApplicationInsightsSmartDetectionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_application_insights_smart_detection_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/application_insights_smart_detection_rule.html azurerm_application_insights_smart_detection_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationInsightsSmartDetectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationInsightsSmartDetectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_application_insights_smart_detection_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._additionalEmailRecipients = config.additionalEmailRecipients;
    this._applicationInsightsId = config.applicationInsightsId;
    this._enabled = config.enabled;
    this._name = config.name;
    this._sendEmailsToSubscriptionOwners = config.sendEmailsToSubscriptionOwners;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_email_recipients - computed: false, optional: true, required: false
  private _additionalEmailRecipients?: string[] | undefined; 
  public get additionalEmailRecipients() {
    return this.getListAttribute('additional_email_recipients');
  }
  public set additionalEmailRecipients(value: string[] | undefined) {
    this._additionalEmailRecipients = value;
  }
  public resetAdditionalEmailRecipients() {
    this._additionalEmailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEmailRecipientsInput() {
    return this._additionalEmailRecipients
  }

  // application_insights_id - computed: false, optional: false, required: true
  private _applicationInsightsId?: string; 
  public get applicationInsightsId() {
    return this.getStringAttribute('application_insights_id');
  }
  public set applicationInsightsId(value: string) {
    this._applicationInsightsId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInsightsIdInput() {
    return this._applicationInsightsId
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
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

  // send_emails_to_subscription_owners - computed: false, optional: true, required: false
  private _sendEmailsToSubscriptionOwners?: boolean | cdktf.IResolvable | undefined; 
  public get sendEmailsToSubscriptionOwners() {
    return this.getBooleanAttribute('send_emails_to_subscription_owners') as any;
  }
  public set sendEmailsToSubscriptionOwners(value: boolean | cdktf.IResolvable | undefined) {
    this._sendEmailsToSubscriptionOwners = value;
  }
  public resetSendEmailsToSubscriptionOwners() {
    this._sendEmailsToSubscriptionOwners = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailsToSubscriptionOwnersInput() {
    return this._sendEmailsToSubscriptionOwners
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApplicationInsightsSmartDetectionRuleTimeouts | undefined; 
  private __timeoutsOutput = new ApplicationInsightsSmartDetectionRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ApplicationInsightsSmartDetectionRuleTimeouts | undefined) {
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
      additional_email_recipients: cdktf.listMapper(cdktf.stringToTerraform)(this._additionalEmailRecipients),
      application_insights_id: cdktf.stringToTerraform(this._applicationInsightsId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      send_emails_to_subscription_owners: cdktf.booleanToTerraform(this._sendEmailsToSubscriptionOwners),
      timeouts: applicationInsightsSmartDetectionRuleTimeoutsToTerraform(this._timeouts),
    };
  }
}
