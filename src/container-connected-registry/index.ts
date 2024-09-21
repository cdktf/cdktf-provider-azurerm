// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerConnectedRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#audit_log_enabled ContainerConnectedRegistry#audit_log_enabled}
  */
  readonly auditLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#client_token_ids ContainerConnectedRegistry#client_token_ids}
  */
  readonly clientTokenIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#container_registry_id ContainerConnectedRegistry#container_registry_id}
  */
  readonly containerRegistryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#id ContainerConnectedRegistry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#log_level ContainerConnectedRegistry#log_level}
  */
  readonly logLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#mode ContainerConnectedRegistry#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#parent_registry_id ContainerConnectedRegistry#parent_registry_id}
  */
  readonly parentRegistryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#sync_message_ttl ContainerConnectedRegistry#sync_message_ttl}
  */
  readonly syncMessageTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#sync_schedule ContainerConnectedRegistry#sync_schedule}
  */
  readonly syncSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#sync_token_id ContainerConnectedRegistry#sync_token_id}
  */
  readonly syncTokenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#sync_window ContainerConnectedRegistry#sync_window}
  */
  readonly syncWindow?: string;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#notification ContainerConnectedRegistry#notification}
  */
  readonly notification?: ContainerConnectedRegistryNotification[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#timeouts ContainerConnectedRegistry#timeouts}
  */
  readonly timeouts?: ContainerConnectedRegistryTimeouts;
}
export interface ContainerConnectedRegistryNotification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#action ContainerConnectedRegistry#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#digest ContainerConnectedRegistry#digest}
  */
  readonly digest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#name ContainerConnectedRegistry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#tag ContainerConnectedRegistry#tag}
  */
  readonly tag?: string;
}

export function containerConnectedRegistryNotificationToTerraform(struct?: ContainerConnectedRegistryNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    digest: cdktf.stringToTerraform(struct!.digest),
    name: cdktf.stringToTerraform(struct!.name),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function containerConnectedRegistryNotificationToHclTerraform(struct?: ContainerConnectedRegistryNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digest: {
      value: cdktf.stringToHclTerraform(struct!.digest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerConnectedRegistryNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerConnectedRegistryNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._digest !== undefined) {
      hasAnyValues = true;
      internalValueResult.digest = this._digest;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerConnectedRegistryNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._digest = undefined;
      this._name = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._digest = value.digest;
      this._name = value.name;
      this._tag = value.tag;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // digest - computed: false, optional: true, required: false
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  public resetDigest() {
    this._digest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
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
    return this._name;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class ContainerConnectedRegistryNotificationList extends cdktf.ComplexList {
  public internalValue? : ContainerConnectedRegistryNotification[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ContainerConnectedRegistryNotificationOutputReference {
    return new ContainerConnectedRegistryNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerConnectedRegistryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#create ContainerConnectedRegistry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#delete ContainerConnectedRegistry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#read ContainerConnectedRegistry#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#update ContainerConnectedRegistry#update}
  */
  readonly update?: string;
}

export function containerConnectedRegistryTimeoutsToTerraform(struct?: ContainerConnectedRegistryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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


export function containerConnectedRegistryTimeoutsToHclTerraform(struct?: ContainerConnectedRegistryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerConnectedRegistryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerConnectedRegistryTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerConnectedRegistryTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry azurerm_container_connected_registry}
*/
export class ContainerConnectedRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_container_connected_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerConnectedRegistry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerConnectedRegistry to import
  * @param importFromId The id of the existing ContainerConnectedRegistry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerConnectedRegistry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_container_connected_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/container_connected_registry azurerm_container_connected_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerConnectedRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerConnectedRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_container_connected_registry',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auditLogEnabled = config.auditLogEnabled;
    this._clientTokenIds = config.clientTokenIds;
    this._containerRegistryId = config.containerRegistryId;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._mode = config.mode;
    this._name = config.name;
    this._parentRegistryId = config.parentRegistryId;
    this._syncMessageTtl = config.syncMessageTtl;
    this._syncSchedule = config.syncSchedule;
    this._syncTokenId = config.syncTokenId;
    this._syncWindow = config.syncWindow;
    this._notification.internalValue = config.notification;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audit_log_enabled - computed: false, optional: true, required: false
  private _auditLogEnabled?: boolean | cdktf.IResolvable; 
  public get auditLogEnabled() {
    return this.getBooleanAttribute('audit_log_enabled');
  }
  public set auditLogEnabled(value: boolean | cdktf.IResolvable) {
    this._auditLogEnabled = value;
  }
  public resetAuditLogEnabled() {
    this._auditLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogEnabledInput() {
    return this._auditLogEnabled;
  }

  // client_token_ids - computed: false, optional: true, required: false
  private _clientTokenIds?: string[]; 
  public get clientTokenIds() {
    return this.getListAttribute('client_token_ids');
  }
  public set clientTokenIds(value: string[]) {
    this._clientTokenIds = value;
  }
  public resetClientTokenIds() {
    this._clientTokenIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenIdsInput() {
    return this._clientTokenIds;
  }

  // container_registry_id - computed: false, optional: false, required: true
  private _containerRegistryId?: string; 
  public get containerRegistryId() {
    return this.getStringAttribute('container_registry_id');
  }
  public set containerRegistryId(value: string) {
    this._containerRegistryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRegistryIdInput() {
    return this._containerRegistryId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
    return this._name;
  }

  // parent_registry_id - computed: false, optional: true, required: false
  private _parentRegistryId?: string; 
  public get parentRegistryId() {
    return this.getStringAttribute('parent_registry_id');
  }
  public set parentRegistryId(value: string) {
    this._parentRegistryId = value;
  }
  public resetParentRegistryId() {
    this._parentRegistryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRegistryIdInput() {
    return this._parentRegistryId;
  }

  // sync_message_ttl - computed: false, optional: true, required: false
  private _syncMessageTtl?: string; 
  public get syncMessageTtl() {
    return this.getStringAttribute('sync_message_ttl');
  }
  public set syncMessageTtl(value: string) {
    this._syncMessageTtl = value;
  }
  public resetSyncMessageTtl() {
    this._syncMessageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncMessageTtlInput() {
    return this._syncMessageTtl;
  }

  // sync_schedule - computed: false, optional: true, required: false
  private _syncSchedule?: string; 
  public get syncSchedule() {
    return this.getStringAttribute('sync_schedule');
  }
  public set syncSchedule(value: string) {
    this._syncSchedule = value;
  }
  public resetSyncSchedule() {
    this._syncSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncScheduleInput() {
    return this._syncSchedule;
  }

  // sync_token_id - computed: false, optional: false, required: true
  private _syncTokenId?: string; 
  public get syncTokenId() {
    return this.getStringAttribute('sync_token_id');
  }
  public set syncTokenId(value: string) {
    this._syncTokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTokenIdInput() {
    return this._syncTokenId;
  }

  // sync_window - computed: false, optional: true, required: false
  private _syncWindow?: string; 
  public get syncWindow() {
    return this.getStringAttribute('sync_window');
  }
  public set syncWindow(value: string) {
    this._syncWindow = value;
  }
  public resetSyncWindow() {
    this._syncWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncWindowInput() {
    return this._syncWindow;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new ContainerConnectedRegistryNotificationList(this, "notification", false);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: ContainerConnectedRegistryNotification[] | cdktf.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerConnectedRegistryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerConnectedRegistryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      audit_log_enabled: cdktf.booleanToTerraform(this._auditLogEnabled),
      client_token_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientTokenIds),
      container_registry_id: cdktf.stringToTerraform(this._containerRegistryId),
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      parent_registry_id: cdktf.stringToTerraform(this._parentRegistryId),
      sync_message_ttl: cdktf.stringToTerraform(this._syncMessageTtl),
      sync_schedule: cdktf.stringToTerraform(this._syncSchedule),
      sync_token_id: cdktf.stringToTerraform(this._syncTokenId),
      sync_window: cdktf.stringToTerraform(this._syncWindow),
      notification: cdktf.listMapper(containerConnectedRegistryNotificationToTerraform, true)(this._notification.internalValue),
      timeouts: containerConnectedRegistryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      audit_log_enabled: {
        value: cdktf.booleanToHclTerraform(this._auditLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_token_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientTokenIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      container_registry_id: {
        value: cdktf.stringToHclTerraform(this._containerRegistryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_registry_id: {
        value: cdktf.stringToHclTerraform(this._parentRegistryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_message_ttl: {
        value: cdktf.stringToHclTerraform(this._syncMessageTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_schedule: {
        value: cdktf.stringToHclTerraform(this._syncSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_token_id: {
        value: cdktf.stringToHclTerraform(this._syncTokenId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_window: {
        value: cdktf.stringToHclTerraform(this._syncWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification: {
        value: cdktf.listMapperHcl(containerConnectedRegistryNotificationToHclTerraform, true)(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerConnectedRegistryNotificationList",
      },
      timeouts: {
        value: containerConnectedRegistryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerConnectedRegistryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
