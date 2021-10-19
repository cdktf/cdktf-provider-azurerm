// https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventhubNamespaceDisasterRecoveryConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html#alternate_name EventhubNamespaceDisasterRecoveryConfig#alternate_name}
  */
  readonly alternateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html#name EventhubNamespaceDisasterRecoveryConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html#namespace_name EventhubNamespaceDisasterRecoveryConfig#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html#partner_namespace_id EventhubNamespaceDisasterRecoveryConfig#partner_namespace_id}
  */
  readonly partnerNamespaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html#resource_group_name EventhubNamespaceDisasterRecoveryConfig#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html#timeouts EventhubNamespaceDisasterRecoveryConfig#timeouts}
  */
  readonly timeouts?: EventhubNamespaceDisasterRecoveryConfigTimeouts;
}
export interface EventhubNamespaceDisasterRecoveryConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html#create EventhubNamespaceDisasterRecoveryConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html#delete EventhubNamespaceDisasterRecoveryConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html#read EventhubNamespaceDisasterRecoveryConfig#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html#update EventhubNamespaceDisasterRecoveryConfig#update}
  */
  readonly update?: string;
}

function eventhubNamespaceDisasterRecoveryConfigTimeoutsToTerraform(struct?: EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference | EventhubNamespaceDisasterRecoveryConfigTimeouts): any {
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

export class EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html azurerm_eventhub_namespace_disaster_recovery_config}
*/
export class EventhubNamespaceDisasterRecoveryConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_eventhub_namespace_disaster_recovery_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/eventhub_namespace_disaster_recovery_config.html azurerm_eventhub_namespace_disaster_recovery_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventhubNamespaceDisasterRecoveryConfigConfig
  */
  public constructor(scope: Construct, id: string, config: EventhubNamespaceDisasterRecoveryConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_eventhub_namespace_disaster_recovery_config',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alternateName = config.alternateName;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._partnerNamespaceId = config.partnerNamespaceId;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternate_name - computed: false, optional: true, required: false
  private _alternateName?: string | undefined; 
  public get alternateName() {
    return this.getStringAttribute('alternate_name');
  }
  public set alternateName(value: string | undefined) {
    this._alternateName = value;
  }
  public resetAlternateName() {
    this._alternateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateNameInput() {
    return this._alternateName
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName
  }

  // partner_namespace_id - computed: false, optional: false, required: true
  private _partnerNamespaceId?: string; 
  public get partnerNamespaceId() {
    return this.getStringAttribute('partner_namespace_id');
  }
  public set partnerNamespaceId(value: string) {
    this._partnerNamespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerNamespaceIdInput() {
    return this._partnerNamespaceId
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventhubNamespaceDisasterRecoveryConfigTimeouts | undefined; 
  private __timeoutsOutput = new EventhubNamespaceDisasterRecoveryConfigTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: EventhubNamespaceDisasterRecoveryConfigTimeouts | undefined) {
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
      alternate_name: cdktf.stringToTerraform(this._alternateName),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      partner_namespace_id: cdktf.stringToTerraform(this._partnerNamespaceId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: eventhubNamespaceDisasterRecoveryConfigTimeoutsToTerraform(this._timeouts),
    };
  }
}
