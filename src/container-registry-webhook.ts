// https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerRegistryWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#actions ContainerRegistryWebhook#actions}
  */
  readonly actions: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#custom_headers ContainerRegistryWebhook#custom_headers}
  */
  readonly customHeaders?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#location ContainerRegistryWebhook#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#name ContainerRegistryWebhook#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#registry_name ContainerRegistryWebhook#registry_name}
  */
  readonly registryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#resource_group_name ContainerRegistryWebhook#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#scope ContainerRegistryWebhook#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#service_uri ContainerRegistryWebhook#service_uri}
  */
  readonly serviceUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#status ContainerRegistryWebhook#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#tags ContainerRegistryWebhook#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#timeouts ContainerRegistryWebhook#timeouts}
  */
  readonly timeouts?: ContainerRegistryWebhookTimeouts;
}
export interface ContainerRegistryWebhookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#create ContainerRegistryWebhook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#delete ContainerRegistryWebhook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#read ContainerRegistryWebhook#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html#update ContainerRegistryWebhook#update}
  */
  readonly update?: string;
}

function containerRegistryWebhookTimeoutsToTerraform(struct?: ContainerRegistryWebhookTimeoutsOutputReference | ContainerRegistryWebhookTimeouts): any {
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

export class ContainerRegistryWebhookTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html azurerm_container_registry_webhook}
*/
export class ContainerRegistryWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_container_registry_webhook";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/container_registry_webhook.html azurerm_container_registry_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerRegistryWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerRegistryWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_registry_webhook',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._actions = config.actions;
    this._customHeaders = config.customHeaders;
    this._location = config.location;
    this._name = config.name;
    this._registryName = config.registryName;
    this._resourceGroupName = config.resourceGroupName;
    this._scope = config.scope;
    this._serviceUri = config.serviceUri;
    this._status = config.status;
    this._tags = config.tags;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions
  }

  // custom_headers - computed: false, optional: true, required: false
  private _customHeaders?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get customHeaders() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_headers') as any;
  }
  public set customHeaders(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._customHeaders = value;
  }
  public resetCustomHeaders() {
    this._customHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersInput() {
    return this._customHeaders
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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

  // registry_name - computed: false, optional: false, required: true
  private _registryName?: string; 
  public get registryName() {
    return this.getStringAttribute('registry_name');
  }
  public set registryName(value: string) {
    this._registryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryNameInput() {
    return this._registryName
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string | undefined; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string | undefined) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // service_uri - computed: false, optional: false, required: true
  private _serviceUri?: string; 
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }
  public set serviceUri(value: string) {
    this._serviceUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUriInput() {
    return this._serviceUri
  }

  // status - computed: false, optional: true, required: false
  private _status?: string | undefined; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string | undefined) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerRegistryWebhookTimeouts | undefined; 
  private __timeoutsOutput = new ContainerRegistryWebhookTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ContainerRegistryWebhookTimeouts | undefined) {
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
      actions: cdktf.listMapper(cdktf.stringToTerraform)(this._actions),
      custom_headers: cdktf.hashMapper(cdktf.anyToTerraform)(this._customHeaders),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      registry_name: cdktf.stringToTerraform(this._registryName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      scope: cdktf.stringToTerraform(this._scope),
      service_uri: cdktf.stringToTerraform(this._serviceUri),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      timeouts: containerRegistryWebhookTimeoutsToTerraform(this._timeouts),
    };
  }
}
