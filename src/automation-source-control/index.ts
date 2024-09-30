// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationSourceControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#automatic_sync AutomationSourceControl#automatic_sync}
  */
  readonly automaticSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#automation_account_id AutomationSourceControl#automation_account_id}
  */
  readonly automationAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#branch AutomationSourceControl#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#description AutomationSourceControl#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#folder_path AutomationSourceControl#folder_path}
  */
  readonly folderPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#id AutomationSourceControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#name AutomationSourceControl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#publish_runbook_enabled AutomationSourceControl#publish_runbook_enabled}
  */
  readonly publishRunbookEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#repository_url AutomationSourceControl#repository_url}
  */
  readonly repositoryUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#source_control_type AutomationSourceControl#source_control_type}
  */
  readonly sourceControlType: string;
  /**
  * security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#security AutomationSourceControl#security}
  */
  readonly security: AutomationSourceControlSecurity;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#timeouts AutomationSourceControl#timeouts}
  */
  readonly timeouts?: AutomationSourceControlTimeouts;
}
export interface AutomationSourceControlSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#refresh_token AutomationSourceControl#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#token AutomationSourceControl#token}
  */
  readonly token: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#token_type AutomationSourceControl#token_type}
  */
  readonly tokenType: string;
}

export function automationSourceControlSecurityToTerraform(struct?: AutomationSourceControlSecurityOutputReference | AutomationSourceControlSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
    token: cdktf.stringToTerraform(struct!.token),
    token_type: cdktf.stringToTerraform(struct!.tokenType),
  }
}


export function automationSourceControlSecurityToHclTerraform(struct?: AutomationSourceControlSecurityOutputReference | AutomationSourceControlSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    refresh_token: {
      value: cdktf.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_type: {
      value: cdktf.stringToHclTerraform(struct!.tokenType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutomationSourceControlSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AutomationSourceControlSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._tokenType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenType = this._tokenType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutomationSourceControlSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refreshToken = undefined;
      this._token = undefined;
      this._tokenType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refreshToken = value.refreshToken;
      this._token = value.token;
      this._tokenType = value.tokenType;
    }
  }

  // refresh_token - computed: false, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // token_type - computed: false, optional: false, required: true
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }
}
export interface AutomationSourceControlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#create AutomationSourceControl#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#delete AutomationSourceControl#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#read AutomationSourceControl#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#update AutomationSourceControl#update}
  */
  readonly update?: string;
}

export function automationSourceControlTimeoutsToTerraform(struct?: AutomationSourceControlTimeouts | cdktf.IResolvable): any {
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


export function automationSourceControlTimeoutsToHclTerraform(struct?: AutomationSourceControlTimeouts | cdktf.IResolvable): any {
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

export class AutomationSourceControlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutomationSourceControlTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AutomationSourceControlTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control azurerm_automation_source_control}
*/
export class AutomationSourceControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_automation_source_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationSourceControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationSourceControl to import
  * @param importFromId The id of the existing AutomationSourceControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationSourceControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_automation_source_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/automation_source_control azurerm_automation_source_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationSourceControlConfig
  */
  public constructor(scope: Construct, id: string, config: AutomationSourceControlConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_automation_source_control',
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
    this._automaticSync = config.automaticSync;
    this._automationAccountId = config.automationAccountId;
    this._branch = config.branch;
    this._description = config.description;
    this._folderPath = config.folderPath;
    this._id = config.id;
    this._name = config.name;
    this._publishRunbookEnabled = config.publishRunbookEnabled;
    this._repositoryUrl = config.repositoryUrl;
    this._sourceControlType = config.sourceControlType;
    this._security.internalValue = config.security;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_sync - computed: false, optional: true, required: false
  private _automaticSync?: boolean | cdktf.IResolvable; 
  public get automaticSync() {
    return this.getBooleanAttribute('automatic_sync');
  }
  public set automaticSync(value: boolean | cdktf.IResolvable) {
    this._automaticSync = value;
  }
  public resetAutomaticSync() {
    this._automaticSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticSyncInput() {
    return this._automaticSync;
  }

  // automation_account_id - computed: false, optional: false, required: true
  private _automationAccountId?: string; 
  public get automationAccountId() {
    return this.getStringAttribute('automation_account_id');
  }
  public set automationAccountId(value: string) {
    this._automationAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationAccountIdInput() {
    return this._automationAccountId;
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // folder_path - computed: false, optional: false, required: true
  private _folderPath?: string; 
  public get folderPath() {
    return this.getStringAttribute('folder_path');
  }
  public set folderPath(value: string) {
    this._folderPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderPathInput() {
    return this._folderPath;
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

  // publish_runbook_enabled - computed: false, optional: true, required: false
  private _publishRunbookEnabled?: boolean | cdktf.IResolvable; 
  public get publishRunbookEnabled() {
    return this.getBooleanAttribute('publish_runbook_enabled');
  }
  public set publishRunbookEnabled(value: boolean | cdktf.IResolvable) {
    this._publishRunbookEnabled = value;
  }
  public resetPublishRunbookEnabled() {
    this._publishRunbookEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishRunbookEnabledInput() {
    return this._publishRunbookEnabled;
  }

  // repository_url - computed: false, optional: false, required: true
  private _repositoryUrl?: string; 
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }
  public set repositoryUrl(value: string) {
    this._repositoryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUrlInput() {
    return this._repositoryUrl;
  }

  // source_control_type - computed: false, optional: false, required: true
  private _sourceControlType?: string; 
  public get sourceControlType() {
    return this.getStringAttribute('source_control_type');
  }
  public set sourceControlType(value: string) {
    this._sourceControlType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceControlTypeInput() {
    return this._sourceControlType;
  }

  // security - computed: false, optional: false, required: true
  private _security = new AutomationSourceControlSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: AutomationSourceControlSecurity) {
    this._security.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AutomationSourceControlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AutomationSourceControlTimeouts) {
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
      automatic_sync: cdktf.booleanToTerraform(this._automaticSync),
      automation_account_id: cdktf.stringToTerraform(this._automationAccountId),
      branch: cdktf.stringToTerraform(this._branch),
      description: cdktf.stringToTerraform(this._description),
      folder_path: cdktf.stringToTerraform(this._folderPath),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      publish_runbook_enabled: cdktf.booleanToTerraform(this._publishRunbookEnabled),
      repository_url: cdktf.stringToTerraform(this._repositoryUrl),
      source_control_type: cdktf.stringToTerraform(this._sourceControlType),
      security: automationSourceControlSecurityToTerraform(this._security.internalValue),
      timeouts: automationSourceControlTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_sync: {
        value: cdktf.booleanToHclTerraform(this._automaticSync),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automation_account_id: {
        value: cdktf.stringToHclTerraform(this._automationAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch: {
        value: cdktf.stringToHclTerraform(this._branch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_path: {
        value: cdktf.stringToHclTerraform(this._folderPath),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish_runbook_enabled: {
        value: cdktf.booleanToHclTerraform(this._publishRunbookEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_url: {
        value: cdktf.stringToHclTerraform(this._repositoryUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_control_type: {
        value: cdktf.stringToHclTerraform(this._sourceControlType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security: {
        value: automationSourceControlSecurityToHclTerraform(this._security.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AutomationSourceControlSecurityList",
      },
      timeouts: {
        value: automationSourceControlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutomationSourceControlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
