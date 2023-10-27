# `azurerm_app_service_slot`

Refer to the Terraform Registory for docs: [`azurerm_app_service_slot`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot).

# `appServiceSlot` Submodule <a name="`appServiceSlot` Submodule" id="@cdktf/provider-azurerm.appServiceSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppServiceSlot <a name="AppServiceSlot" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot azurerm_app_service_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_service_name: str,
  app_service_plan_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  app_settings: typing.Mapping[str] = None,
  auth_settings: AppServiceSlotAuthSettings = None,
  client_affinity_enabled: typing.Union[bool, IResolvable] = None,
  connection_string: typing.Union[IResolvable, typing.List[AppServiceSlotConnectionString]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: AppServiceSlotIdentity = None,
  key_vault_reference_identity_id: str = None,
  logs: AppServiceSlotLogs = None,
  site_config: AppServiceSlotSiteConfig = None,
  storage_account: typing.Union[IResolvable, typing.List[AppServiceSlotStorageAccount]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: AppServiceSlotTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.appServiceName">app_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_service_name AppServiceSlot#app_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_service_plan_id AppServiceSlot#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#location AppServiceSlot#location}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#resource_group_name AppServiceSlot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_settings AppServiceSlot#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.clientAffinityEnabled">client_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_affinity_enabled AppServiceSlot#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#https_only AppServiceSlot#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#id AppServiceSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#key_vault_reference_identity_id AppServiceSlot#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#tags AppServiceSlot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_name`<sup>Required</sup> <a name="app_service_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.appServiceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_service_name AppServiceSlot#app_service_name}.

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.appServicePlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_service_plan_id AppServiceSlot#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#location AppServiceSlot#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#resource_group_name AppServiceSlot#resource_group_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.appSettings"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_settings AppServiceSlot#app_settings}.

---

##### `auth_settings`<sup>Optional</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.authSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#auth_settings AppServiceSlot#auth_settings}

---

##### `client_affinity_enabled`<sup>Optional</sup> <a name="client_affinity_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.clientAffinityEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_affinity_enabled AppServiceSlot#client_affinity_enabled}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.connectionString"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#connection_string AppServiceSlot#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.httpsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#https_only AppServiceSlot#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#id AppServiceSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#identity AppServiceSlot#identity}

---

##### `key_vault_reference_identity_id`<sup>Optional</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.keyVaultReferenceIdentityId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#key_vault_reference_identity_id AppServiceSlot#key_vault_reference_identity_id}.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.logs"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#logs AppServiceSlot#logs}

---

##### `site_config`<sup>Optional</sup> <a name="site_config" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.siteConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#site_config AppServiceSlot#site_config}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.storageAccount"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#storage_account AppServiceSlot#storage_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#tags AppServiceSlot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#timeouts AppServiceSlot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings">put_auth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putConnectionString">put_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs">put_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig">put_site_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putStorageAccount">put_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAppSettings">reset_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAuthSettings">reset_auth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetClientAffinityEnabled">reset_client_affinity_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetHttpsOnly">reset_https_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetKeyVaultReferenceIdentityId">reset_key_vault_reference_identity_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetLogs">reset_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetSiteConfig">reset_site_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetStorageAccount">reset_storage_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_auth_settings` <a name="put_auth_settings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings"></a>

```python
def put_auth_settings(
  enabled: typing.Union[bool, IResolvable],
  active_directory: AppServiceSlotAuthSettingsActiveDirectory = None,
  additional_login_params: typing.Mapping[str] = None,
  allowed_external_redirect_urls: typing.List[str] = None,
  default_provider: str = None,
  facebook: AppServiceSlotAuthSettingsFacebook = None,
  google: AppServiceSlotAuthSettingsGoogle = None,
  issuer: str = None,
  microsoft: AppServiceSlotAuthSettingsMicrosoft = None,
  runtime_version: str = None,
  token_refresh_extension_hours: typing.Union[int, float] = None,
  token_store_enabled: typing.Union[bool, IResolvable] = None,
  twitter: AppServiceSlotAuthSettingsTwitter = None,
  unauthenticated_client_action: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}.

---

###### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.activeDirectory"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#active_directory AppServiceSlot#active_directory}

---

###### `additional_login_params`<sup>Optional</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.additionalLoginParams"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#additional_login_params AppServiceSlot#additional_login_params}.

---

###### `allowed_external_redirect_urls`<sup>Optional</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.allowedExternalRedirectUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#allowed_external_redirect_urls AppServiceSlot#allowed_external_redirect_urls}.

---

###### `default_provider`<sup>Optional</sup> <a name="default_provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.defaultProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#default_provider AppServiceSlot#default_provider}.

---

###### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.facebook"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#facebook AppServiceSlot#facebook}

---

###### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.google"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#google AppServiceSlot#google}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#issuer AppServiceSlot#issuer}.

---

###### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.microsoft"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#microsoft AppServiceSlot#microsoft}

---

###### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.runtimeVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#runtime_version AppServiceSlot#runtime_version}.

---

###### `token_refresh_extension_hours`<sup>Optional</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.tokenRefreshExtensionHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#token_refresh_extension_hours AppServiceSlot#token_refresh_extension_hours}.

---

###### `token_store_enabled`<sup>Optional</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.tokenStoreEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#token_store_enabled AppServiceSlot#token_store_enabled}.

---

###### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.twitter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#twitter AppServiceSlot#twitter}

---

###### `unauthenticated_client_action`<sup>Optional</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putAuthSettings.parameter.unauthenticatedClientAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#unauthenticated_client_action AppServiceSlot#unauthenticated_client_action}.

---

##### `put_connection_string` <a name="put_connection_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putConnectionString"></a>

```python
def put_connection_string(
  value: typing.Union[IResolvable, typing.List[AppServiceSlotConnectionString]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putConnectionString.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#type AppServiceSlot#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#identity_ids AppServiceSlot#identity_ids}.

---

##### `put_logs` <a name="put_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs"></a>

```python
def put_logs(
  application_logs: AppServiceSlotLogsApplicationLogs = None,
  detailed_error_messages_enabled: typing.Union[bool, IResolvable] = None,
  failed_request_tracing_enabled: typing.Union[bool, IResolvable] = None,
  http_logs: AppServiceSlotLogsHttpLogs = None
) -> None
```

###### `application_logs`<sup>Optional</sup> <a name="application_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs.parameter.applicationLogs"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

application_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#application_logs AppServiceSlot#application_logs}

---

###### `detailed_error_messages_enabled`<sup>Optional</sup> <a name="detailed_error_messages_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs.parameter.detailedErrorMessagesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#detailed_error_messages_enabled AppServiceSlot#detailed_error_messages_enabled}.

---

###### `failed_request_tracing_enabled`<sup>Optional</sup> <a name="failed_request_tracing_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs.parameter.failedRequestTracingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#failed_request_tracing_enabled AppServiceSlot#failed_request_tracing_enabled}.

---

###### `http_logs`<sup>Optional</sup> <a name="http_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putLogs.parameter.httpLogs"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

http_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#http_logs AppServiceSlot#http_logs}

---

##### `put_site_config` <a name="put_site_config" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig"></a>

```python
def put_site_config(
  acr_use_managed_identity_credentials: typing.Union[bool, IResolvable] = None,
  acr_user_managed_identity_client_id: str = None,
  always_on: typing.Union[bool, IResolvable] = None,
  app_command_line: str = None,
  auto_swap_slot_name: str = None,
  cors: AppServiceSlotSiteConfigCors = None,
  default_documents: typing.List[str] = None,
  dotnet_framework_version: str = None,
  ftps_state: str = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigIpRestriction]] = None,
  java_container: str = None,
  java_container_version: str = None,
  java_version: str = None,
  linux_fx_version: str = None,
  local_mysql_enabled: typing.Union[bool, IResolvable] = None,
  managed_pipeline_mode: str = None,
  min_tls_version: str = None,
  number_of_workers: typing.Union[int, float] = None,
  php_version: str = None,
  python_version: str = None,
  remote_debugging_enabled: typing.Union[bool, IResolvable] = None,
  remote_debugging_version: str = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigScmIpRestriction]] = None,
  scm_type: str = None,
  scm_use_main_ip_restriction: typing.Union[bool, IResolvable] = None,
  use32_bit_worker_process: typing.Union[bool, IResolvable] = None,
  vnet_route_all_enabled: typing.Union[bool, IResolvable] = None,
  websockets_enabled: typing.Union[bool, IResolvable] = None,
  windows_fx_version: str = None
) -> None
```

###### `acr_use_managed_identity_credentials`<sup>Optional</sup> <a name="acr_use_managed_identity_credentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.acrUseManagedIdentityCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#acr_use_managed_identity_credentials AppServiceSlot#acr_use_managed_identity_credentials}.

---

###### `acr_user_managed_identity_client_id`<sup>Optional</sup> <a name="acr_user_managed_identity_client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.acrUserManagedIdentityClientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#acr_user_managed_identity_client_id AppServiceSlot#acr_user_managed_identity_client_id}.

---

###### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.alwaysOn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#always_on AppServiceSlot#always_on}.

---

###### `app_command_line`<sup>Optional</sup> <a name="app_command_line" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.appCommandLine"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_command_line AppServiceSlot#app_command_line}.

---

###### `auto_swap_slot_name`<sup>Optional</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.autoSwapSlotName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#auto_swap_slot_name AppServiceSlot#auto_swap_slot_name}.

---

###### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.cors"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#cors AppServiceSlot#cors}

---

###### `default_documents`<sup>Optional</sup> <a name="default_documents" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.defaultDocuments"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#default_documents AppServiceSlot#default_documents}.

---

###### `dotnet_framework_version`<sup>Optional</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.dotnetFrameworkVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#dotnet_framework_version AppServiceSlot#dotnet_framework_version}.

---

###### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.ftpsState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#ftps_state AppServiceSlot#ftps_state}.

---

###### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.healthCheckPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#health_check_path AppServiceSlot#health_check_path}.

---

###### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.http2Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#http2_enabled AppServiceSlot#http2_enabled}.

---

###### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.ipRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#ip_restriction AppServiceSlot#ip_restriction}.

---

###### `java_container`<sup>Optional</sup> <a name="java_container" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.javaContainer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#java_container AppServiceSlot#java_container}.

---

###### `java_container_version`<sup>Optional</sup> <a name="java_container_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.javaContainerVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#java_container_version AppServiceSlot#java_container_version}.

---

###### `java_version`<sup>Optional</sup> <a name="java_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.javaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#java_version AppServiceSlot#java_version}.

---

###### `linux_fx_version`<sup>Optional</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.linuxFxVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#linux_fx_version AppServiceSlot#linux_fx_version}.

---

###### `local_mysql_enabled`<sup>Optional</sup> <a name="local_mysql_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.localMysqlEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#local_mysql_enabled AppServiceSlot#local_mysql_enabled}.

---

###### `managed_pipeline_mode`<sup>Optional</sup> <a name="managed_pipeline_mode" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.managedPipelineMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#managed_pipeline_mode AppServiceSlot#managed_pipeline_mode}.

---

###### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.minTlsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#min_tls_version AppServiceSlot#min_tls_version}.

---

###### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.numberOfWorkers"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#number_of_workers AppServiceSlot#number_of_workers}.

---

###### `php_version`<sup>Optional</sup> <a name="php_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.phpVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#php_version AppServiceSlot#php_version}.

---

###### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.pythonVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#python_version AppServiceSlot#python_version}.

---

###### `remote_debugging_enabled`<sup>Optional</sup> <a name="remote_debugging_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.remoteDebuggingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#remote_debugging_enabled AppServiceSlot#remote_debugging_enabled}.

---

###### `remote_debugging_version`<sup>Optional</sup> <a name="remote_debugging_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.remoteDebuggingVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#remote_debugging_version AppServiceSlot#remote_debugging_version}.

---

###### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.scmIpRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#scm_ip_restriction AppServiceSlot#scm_ip_restriction}.

---

###### `scm_type`<sup>Optional</sup> <a name="scm_type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.scmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#scm_type AppServiceSlot#scm_type}.

---

###### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.scmUseMainIpRestriction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#scm_use_main_ip_restriction AppServiceSlot#scm_use_main_ip_restriction}.

---

###### `use32_bit_worker_process`<sup>Optional</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.use32BitWorkerProcess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#use_32_bit_worker_process AppServiceSlot#use_32_bit_worker_process}.

---

###### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.vnetRouteAllEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#vnet_route_all_enabled AppServiceSlot#vnet_route_all_enabled}.

---

###### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.websocketsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#websockets_enabled AppServiceSlot#websockets_enabled}.

---

###### `windows_fx_version`<sup>Optional</sup> <a name="windows_fx_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putSiteConfig.parameter.windowsFxVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#windows_fx_version AppServiceSlot#windows_fx_version}.

---

##### `put_storage_account` <a name="put_storage_account" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putStorageAccount"></a>

```python
def put_storage_account(
  value: typing.Union[IResolvable, typing.List[AppServiceSlotStorageAccount]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putStorageAccount.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#create AppServiceSlot#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#delete AppServiceSlot#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#read AppServiceSlot#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#update AppServiceSlot#update}.

---

##### `reset_app_settings` <a name="reset_app_settings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAppSettings"></a>

```python
def reset_app_settings() -> None
```

##### `reset_auth_settings` <a name="reset_auth_settings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetAuthSettings"></a>

```python
def reset_auth_settings() -> None
```

##### `reset_client_affinity_enabled` <a name="reset_client_affinity_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetClientAffinityEnabled"></a>

```python
def reset_client_affinity_enabled() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_https_only` <a name="reset_https_only" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetHttpsOnly"></a>

```python
def reset_https_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_key_vault_reference_identity_id` <a name="reset_key_vault_reference_identity_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetKeyVaultReferenceIdentityId"></a>

```python
def reset_key_vault_reference_identity_id() -> None
```

##### `reset_logs` <a name="reset_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetLogs"></a>

```python
def reset_logs() -> None
```

##### `reset_site_config` <a name="reset_site_config" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetSiteConfig"></a>

```python
def reset_site_config() -> None
```

##### `reset_storage_account` <a name="reset_storage_account" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetStorageAccount"></a>

```python
def reset_storage_account() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AppServiceSlot resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlot.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AppServiceSlot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AppServiceSlot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AppServiceSlot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppServiceSlot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference">AppServiceSlotAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionString">connection_string</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList">AppServiceSlotConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.defaultSiteHostname">default_site_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference">AppServiceSlotIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference">AppServiceSlotLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference">AppServiceSlotSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteCredential">site_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList">AppServiceSlotSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccount">storage_account</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList">AppServiceSlotStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference">AppServiceSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceNameInput">app_service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanIdInput">app_service_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettingsInput">app_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettingsInput">auth_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabledInput">client_affinity_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionStringInput">connection_string_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnlyInput">https_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityIdInput">key_vault_reference_identity_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logsInput">logs_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfigInput">site_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccountInput">storage_account_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceName">app_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabled">client_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_settings`<sup>Required</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettings"></a>

```python
auth_settings: AppServiceSlotAuthSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference">AppServiceSlotAuthSettingsOutputReference</a>

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionString"></a>

```python
connection_string: AppServiceSlotConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList">AppServiceSlotConnectionStringList</a>

---

##### `default_site_hostname`<sup>Required</sup> <a name="default_site_hostname" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.defaultSiteHostname"></a>

```python
default_site_hostname: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identity"></a>

```python
identity: AppServiceSlotIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference">AppServiceSlotIdentityOutputReference</a>

---

##### `logs`<sup>Required</sup> <a name="logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logs"></a>

```python
logs: AppServiceSlotLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference">AppServiceSlotLogsOutputReference</a>

---

##### `site_config`<sup>Required</sup> <a name="site_config" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfig"></a>

```python
site_config: AppServiceSlotSiteConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference">AppServiceSlotSiteConfigOutputReference</a>

---

##### `site_credential`<sup>Required</sup> <a name="site_credential" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteCredential"></a>

```python
site_credential: AppServiceSlotSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList">AppServiceSlotSiteCredentialList</a>

---

##### `storage_account`<sup>Required</sup> <a name="storage_account" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccount"></a>

```python
storage_account: AppServiceSlotStorageAccountList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList">AppServiceSlotStorageAccountList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeouts"></a>

```python
timeouts: AppServiceSlotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference">AppServiceSlotTimeoutsOutputReference</a>

---

##### `app_service_name_input`<sup>Optional</sup> <a name="app_service_name_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceNameInput"></a>

```python
app_service_name_input: str
```

- *Type:* str

---

##### `app_service_plan_id_input`<sup>Optional</sup> <a name="app_service_plan_id_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanIdInput"></a>

```python
app_service_plan_id_input: str
```

- *Type:* str

---

##### `app_settings_input`<sup>Optional</sup> <a name="app_settings_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettingsInput"></a>

```python
app_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auth_settings_input`<sup>Optional</sup> <a name="auth_settings_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.authSettingsInput"></a>

```python
auth_settings_input: AppServiceSlotAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

---

##### `client_affinity_enabled_input`<sup>Optional</sup> <a name="client_affinity_enabled_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabledInput"></a>

```python
client_affinity_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.connectionStringInput"></a>

```python
connection_string_input: typing.Union[IResolvable, typing.List[AppServiceSlotConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>]]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `https_only_input`<sup>Optional</sup> <a name="https_only_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnlyInput"></a>

```python
https_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.identityInput"></a>

```python
identity_input: AppServiceSlotIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_vault_reference_identity_id_input`<sup>Optional</sup> <a name="key_vault_reference_identity_id_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityIdInput"></a>

```python
key_vault_reference_identity_id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `logs_input`<sup>Optional</sup> <a name="logs_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.logsInput"></a>

```python
logs_input: AppServiceSlotLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `site_config_input`<sup>Optional</sup> <a name="site_config_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.siteConfigInput"></a>

```python
site_config_input: AppServiceSlotSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

---

##### `storage_account_input`<sup>Optional</sup> <a name="storage_account_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.storageAccountInput"></a>

```python
storage_account_input: typing.Union[IResolvable, typing.List[AppServiceSlotStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AppServiceSlotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>]

---

##### `app_service_name`<sup>Required</sup> <a name="app_service_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServiceName"></a>

```python
app_service_name: str
```

- *Type:* str

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appServicePlanId"></a>

```python
app_service_plan_id: str
```

- *Type:* str

---

##### `app_settings`<sup>Required</sup> <a name="app_settings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `client_affinity_enabled`<sup>Required</sup> <a name="client_affinity_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.clientAffinityEnabled"></a>

```python
client_affinity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_vault_reference_identity_id`<sup>Required</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.keyVaultReferenceIdentityId"></a>

```python
key_vault_reference_identity_id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AppServiceSlotAuthSettings <a name="AppServiceSlotAuthSettings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettings(
  enabled: typing.Union[bool, IResolvable],
  active_directory: AppServiceSlotAuthSettingsActiveDirectory = None,
  additional_login_params: typing.Mapping[str] = None,
  allowed_external_redirect_urls: typing.List[str] = None,
  default_provider: str = None,
  facebook: AppServiceSlotAuthSettingsFacebook = None,
  google: AppServiceSlotAuthSettingsGoogle = None,
  issuer: str = None,
  microsoft: AppServiceSlotAuthSettingsMicrosoft = None,
  runtime_version: str = None,
  token_refresh_extension_hours: typing.Union[int, float] = None,
  token_store_enabled: typing.Union[bool, IResolvable] = None,
  twitter: AppServiceSlotAuthSettingsTwitter = None,
  unauthenticated_client_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.additionalLoginParams">additional_login_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#additional_login_params AppServiceSlot#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.allowedExternalRedirectUrls">allowed_external_redirect_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#allowed_external_redirect_urls AppServiceSlot#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.defaultProvider">default_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#default_provider AppServiceSlot#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#issuer AppServiceSlot#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#runtime_version AppServiceSlot#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenRefreshExtensionHours">token_refresh_extension_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#token_refresh_extension_hours AppServiceSlot#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenStoreEnabled">token_store_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#token_store_enabled AppServiceSlot#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.unauthenticatedClientAction">unauthenticated_client_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#unauthenticated_client_action AppServiceSlot#unauthenticated_client_action}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}.

---

##### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.activeDirectory"></a>

```python
active_directory: AppServiceSlotAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#active_directory AppServiceSlot#active_directory}

---

##### `additional_login_params`<sup>Optional</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.additionalLoginParams"></a>

```python
additional_login_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#additional_login_params AppServiceSlot#additional_login_params}.

---

##### `allowed_external_redirect_urls`<sup>Optional</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.allowedExternalRedirectUrls"></a>

```python
allowed_external_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#allowed_external_redirect_urls AppServiceSlot#allowed_external_redirect_urls}.

---

##### `default_provider`<sup>Optional</sup> <a name="default_provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.defaultProvider"></a>

```python
default_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#default_provider AppServiceSlot#default_provider}.

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.facebook"></a>

```python
facebook: AppServiceSlotAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#facebook AppServiceSlot#facebook}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.google"></a>

```python
google: AppServiceSlotAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#google AppServiceSlot#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#issuer AppServiceSlot#issuer}.

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.microsoft"></a>

```python
microsoft: AppServiceSlotAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#microsoft AppServiceSlot#microsoft}

---

##### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#runtime_version AppServiceSlot#runtime_version}.

---

##### `token_refresh_extension_hours`<sup>Optional</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenRefreshExtensionHours"></a>

```python
token_refresh_extension_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#token_refresh_extension_hours AppServiceSlot#token_refresh_extension_hours}.

---

##### `token_store_enabled`<sup>Optional</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.tokenStoreEnabled"></a>

```python
token_store_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#token_store_enabled AppServiceSlot#token_store_enabled}.

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.twitter"></a>

```python
twitter: AppServiceSlotAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#twitter AppServiceSlot#twitter}

---

##### `unauthenticated_client_action`<sup>Optional</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings.property.unauthenticatedClientAction"></a>

```python
unauthenticated_client_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#unauthenticated_client_action AppServiceSlot#unauthenticated_client_action}.

---

### AppServiceSlotAuthSettingsActiveDirectory <a name="AppServiceSlotAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory(
  client_id: str,
  allowed_audiences: typing.List[str] = None,
  client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#allowed_audiences AppServiceSlot#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

##### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#allowed_audiences AppServiceSlot#allowed_audiences}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

### AppServiceSlotAuthSettingsFacebook <a name="AppServiceSlotAuthSettingsFacebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettingsFacebook(
  app_id: str,
  app_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_id AppServiceSlot#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appSecret">app_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_secret AppServiceSlot#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}. |

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_id AppServiceSlot#app_id}.

---

##### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.appSecret"></a>

```python
app_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_secret AppServiceSlot#app_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

### AppServiceSlotAuthSettingsGoogle <a name="AppServiceSlotAuthSettingsGoogle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettingsGoogle(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

### AppServiceSlotAuthSettingsMicrosoft <a name="AppServiceSlotAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettingsMicrosoft(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

### AppServiceSlotAuthSettingsTwitter <a name="AppServiceSlotAuthSettingsTwitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettingsTwitter(
  consumer_key: str,
  consumer_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerKey">consumer_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#consumer_key AppServiceSlot#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#consumer_secret AppServiceSlot#consumer_secret}. |

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#consumer_key AppServiceSlot#consumer_key}.

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#consumer_secret AppServiceSlot#consumer_secret}.

---

### AppServiceSlotConfig <a name="AppServiceSlotConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_service_name: str,
  app_service_plan_id: str,
  location: str,
  name: str,
  resource_group_name: str,
  app_settings: typing.Mapping[str] = None,
  auth_settings: AppServiceSlotAuthSettings = None,
  client_affinity_enabled: typing.Union[bool, IResolvable] = None,
  connection_string: typing.Union[IResolvable, typing.List[AppServiceSlotConnectionString]] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: AppServiceSlotIdentity = None,
  key_vault_reference_identity_id: str = None,
  logs: AppServiceSlotLogs = None,
  site_config: AppServiceSlotSiteConfig = None,
  storage_account: typing.Union[IResolvable, typing.List[AppServiceSlotStorageAccount]] = None,
  tags: typing.Mapping[str] = None,
  timeouts: AppServiceSlotTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServiceName">app_service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_service_name AppServiceSlot#app_service_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_service_plan_id AppServiceSlot#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#location AppServiceSlot#location}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#resource_group_name AppServiceSlot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_settings AppServiceSlot#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.clientAffinityEnabled">client_affinity_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_affinity_enabled AppServiceSlot#client_affinity_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#https_only AppServiceSlot#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#id AppServiceSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.keyVaultReferenceIdentityId">key_vault_reference_identity_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#key_vault_reference_identity_id AppServiceSlot#key_vault_reference_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.logs">logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a></code> | logs block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.storageAccount">storage_account</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>]]</code> | storage_account block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#tags AppServiceSlot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_name`<sup>Required</sup> <a name="app_service_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServiceName"></a>

```python
app_service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_service_name AppServiceSlot#app_service_name}.

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appServicePlanId"></a>

```python
app_service_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_service_plan_id AppServiceSlot#app_service_plan_id}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#location AppServiceSlot#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#resource_group_name AppServiceSlot#resource_group_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_settings AppServiceSlot#app_settings}.

---

##### `auth_settings`<sup>Optional</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.authSettings"></a>

```python
auth_settings: AppServiceSlotAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#auth_settings AppServiceSlot#auth_settings}

---

##### `client_affinity_enabled`<sup>Optional</sup> <a name="client_affinity_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.clientAffinityEnabled"></a>

```python
client_affinity_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_affinity_enabled AppServiceSlot#client_affinity_enabled}.

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.connectionString"></a>

```python
connection_string: typing.Union[IResolvable, typing.List[AppServiceSlotConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#connection_string AppServiceSlot#connection_string}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#enabled AppServiceSlot#enabled}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#https_only AppServiceSlot#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#id AppServiceSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.identity"></a>

```python
identity: AppServiceSlotIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#identity AppServiceSlot#identity}

---

##### `key_vault_reference_identity_id`<sup>Optional</sup> <a name="key_vault_reference_identity_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.keyVaultReferenceIdentityId"></a>

```python
key_vault_reference_identity_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#key_vault_reference_identity_id AppServiceSlot#key_vault_reference_identity_id}.

---

##### `logs`<sup>Optional</sup> <a name="logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.logs"></a>

```python
logs: AppServiceSlotLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#logs AppServiceSlot#logs}

---

##### `site_config`<sup>Optional</sup> <a name="site_config" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.siteConfig"></a>

```python
site_config: AppServiceSlotSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#site_config AppServiceSlot#site_config}

---

##### `storage_account`<sup>Optional</sup> <a name="storage_account" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.storageAccount"></a>

```python
storage_account: typing.Union[IResolvable, typing.List[AppServiceSlotStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>]]

storage_account block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#storage_account AppServiceSlot#storage_account}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#tags AppServiceSlot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConfig.property.timeouts"></a>

```python
timeouts: AppServiceSlotTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#timeouts AppServiceSlot#timeouts}

---

### AppServiceSlotConnectionString <a name="AppServiceSlotConnectionString" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotConnectionString(
  name: str,
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#type AppServiceSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#value AppServiceSlot#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#type AppServiceSlot#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#value AppServiceSlot#value}.

---

### AppServiceSlotIdentity <a name="AppServiceSlotIdentity" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#type AppServiceSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#identity_ids AppServiceSlot#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#type AppServiceSlot#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#identity_ids AppServiceSlot#identity_ids}.

---

### AppServiceSlotLogs <a name="AppServiceSlotLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogs(
  application_logs: AppServiceSlotLogsApplicationLogs = None,
  detailed_error_messages_enabled: typing.Union[bool, IResolvable] = None,
  failed_request_tracing_enabled: typing.Union[bool, IResolvable] = None,
  http_logs: AppServiceSlotLogsHttpLogs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.applicationLogs">application_logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a></code> | application_logs block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.detailedErrorMessagesEnabled">detailed_error_messages_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#detailed_error_messages_enabled AppServiceSlot#detailed_error_messages_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.failedRequestTracingEnabled">failed_request_tracing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#failed_request_tracing_enabled AppServiceSlot#failed_request_tracing_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.httpLogs">http_logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a></code> | http_logs block. |

---

##### `application_logs`<sup>Optional</sup> <a name="application_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.applicationLogs"></a>

```python
application_logs: AppServiceSlotLogsApplicationLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

application_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#application_logs AppServiceSlot#application_logs}

---

##### `detailed_error_messages_enabled`<sup>Optional</sup> <a name="detailed_error_messages_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.detailedErrorMessagesEnabled"></a>

```python
detailed_error_messages_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#detailed_error_messages_enabled AppServiceSlot#detailed_error_messages_enabled}.

---

##### `failed_request_tracing_enabled`<sup>Optional</sup> <a name="failed_request_tracing_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.failedRequestTracingEnabled"></a>

```python
failed_request_tracing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#failed_request_tracing_enabled AppServiceSlot#failed_request_tracing_enabled}.

---

##### `http_logs`<sup>Optional</sup> <a name="http_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs.property.httpLogs"></a>

```python
http_logs: AppServiceSlotLogsHttpLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

http_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#http_logs AppServiceSlot#http_logs}

---

### AppServiceSlotLogsApplicationLogs <a name="AppServiceSlotLogsApplicationLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogsApplicationLogs(
  azure_blob_storage: AppServiceSlotLogsApplicationLogsAzureBlobStorage = None,
  file_system_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.azureBlobStorage">azure_blob_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.fileSystemLevel">file_system_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#file_system_level AppServiceSlot#file_system_level}. |

---

##### `azure_blob_storage`<sup>Optional</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.azureBlobStorage"></a>

```python
azure_blob_storage: AppServiceSlotLogsApplicationLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#azure_blob_storage AppServiceSlot#azure_blob_storage}

---

##### `file_system_level`<sup>Optional</sup> <a name="file_system_level" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs.property.fileSystemLevel"></a>

```python
file_system_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#file_system_level AppServiceSlot#file_system_level}.

---

### AppServiceSlotLogsApplicationLogsAzureBlobStorage <a name="AppServiceSlotLogsApplicationLogsAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage(
  level: str,
  retention_in_days: typing.Union[int, float],
  sas_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.level">level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#level AppServiceSlot#level}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.sasUrl">sas_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}. |

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.level"></a>

```python
level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#level AppServiceSlot#level}.

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

##### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage.property.sasUrl"></a>

```python
sas_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}.

---

### AppServiceSlotLogsHttpLogs <a name="AppServiceSlotLogsHttpLogs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogsHttpLogs(
  azure_blob_storage: AppServiceSlotLogsHttpLogsAzureBlobStorage = None,
  file_system: AppServiceSlotLogsHttpLogsFileSystem = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.azureBlobStorage">azure_blob_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a></code> | azure_blob_storage block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.fileSystem">file_system</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a></code> | file_system block. |

---

##### `azure_blob_storage`<sup>Optional</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.azureBlobStorage"></a>

```python
azure_blob_storage: AppServiceSlotLogsHttpLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#azure_blob_storage AppServiceSlot#azure_blob_storage}

---

##### `file_system`<sup>Optional</sup> <a name="file_system" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs.property.fileSystem"></a>

```python
file_system: AppServiceSlotLogsHttpLogsFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#file_system AppServiceSlot#file_system}

---

### AppServiceSlotLogsHttpLogsAzureBlobStorage <a name="AppServiceSlotLogsHttpLogsAzureBlobStorage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage(
  retention_in_days: typing.Union[int, float],
  sas_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.sasUrl">sas_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}. |

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

##### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage.property.sasUrl"></a>

```python
sas_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}.

---

### AppServiceSlotLogsHttpLogsFileSystem <a name="AppServiceSlotLogsHttpLogsFileSystem" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem(
  retention_in_days: typing.Union[int, float],
  retention_in_mb: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInMb">retention_in_mb</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_mb AppServiceSlot#retention_in_mb}. |

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

##### `retention_in_mb`<sup>Required</sup> <a name="retention_in_mb" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem.property.retentionInMb"></a>

```python
retention_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_mb AppServiceSlot#retention_in_mb}.

---

### AppServiceSlotSiteConfig <a name="AppServiceSlotSiteConfig" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfig(
  acr_use_managed_identity_credentials: typing.Union[bool, IResolvable] = None,
  acr_user_managed_identity_client_id: str = None,
  always_on: typing.Union[bool, IResolvable] = None,
  app_command_line: str = None,
  auto_swap_slot_name: str = None,
  cors: AppServiceSlotSiteConfigCors = None,
  default_documents: typing.List[str] = None,
  dotnet_framework_version: str = None,
  ftps_state: str = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigIpRestriction]] = None,
  java_container: str = None,
  java_container_version: str = None,
  java_version: str = None,
  linux_fx_version: str = None,
  local_mysql_enabled: typing.Union[bool, IResolvable] = None,
  managed_pipeline_mode: str = None,
  min_tls_version: str = None,
  number_of_workers: typing.Union[int, float] = None,
  php_version: str = None,
  python_version: str = None,
  remote_debugging_enabled: typing.Union[bool, IResolvable] = None,
  remote_debugging_version: str = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigScmIpRestriction]] = None,
  scm_type: str = None,
  scm_use_main_ip_restriction: typing.Union[bool, IResolvable] = None,
  use32_bit_worker_process: typing.Union[bool, IResolvable] = None,
  vnet_route_all_enabled: typing.Union[bool, IResolvable] = None,
  websockets_enabled: typing.Union[bool, IResolvable] = None,
  windows_fx_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUseManagedIdentityCredentials">acr_use_managed_identity_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#acr_use_managed_identity_credentials AppServiceSlot#acr_use_managed_identity_credentials}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUserManagedIdentityClientId">acr_user_managed_identity_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#acr_user_managed_identity_client_id AppServiceSlot#acr_user_managed_identity_client_id}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#always_on AppServiceSlot#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.appCommandLine">app_command_line</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_command_line AppServiceSlot#app_command_line}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.autoSwapSlotName">auto_swap_slot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#auto_swap_slot_name AppServiceSlot#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.defaultDocuments">default_documents</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#default_documents AppServiceSlot#default_documents}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.dotnetFrameworkVersion">dotnet_framework_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#dotnet_framework_version AppServiceSlot#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ftpsState">ftps_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#ftps_state AppServiceSlot#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#health_check_path AppServiceSlot#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#http2_enabled AppServiceSlot#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ipRestriction">ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#ip_restriction AppServiceSlot#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainer">java_container</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#java_container AppServiceSlot#java_container}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainerVersion">java_container_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#java_container_version AppServiceSlot#java_container_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaVersion">java_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#java_version AppServiceSlot#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.linuxFxVersion">linux_fx_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#linux_fx_version AppServiceSlot#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.localMysqlEnabled">local_mysql_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#local_mysql_enabled AppServiceSlot#local_mysql_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.managedPipelineMode">managed_pipeline_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#managed_pipeline_mode AppServiceSlot#managed_pipeline_mode}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#min_tls_version AppServiceSlot#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#number_of_workers AppServiceSlot#number_of_workers}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.phpVersion">php_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#php_version AppServiceSlot#php_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.pythonVersion">python_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#python_version AppServiceSlot#python_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingEnabled">remote_debugging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#remote_debugging_enabled AppServiceSlot#remote_debugging_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingVersion">remote_debugging_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#remote_debugging_version AppServiceSlot#remote_debugging_version}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmIpRestriction">scm_ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#scm_ip_restriction AppServiceSlot#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmType">scm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#scm_type AppServiceSlot#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#scm_use_main_ip_restriction AppServiceSlot#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.use32BitWorkerProcess">use32_bit_worker_process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#use_32_bit_worker_process AppServiceSlot#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#vnet_route_all_enabled AppServiceSlot#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#websockets_enabled AppServiceSlot#websockets_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.windowsFxVersion">windows_fx_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#windows_fx_version AppServiceSlot#windows_fx_version}. |

---

##### `acr_use_managed_identity_credentials`<sup>Optional</sup> <a name="acr_use_managed_identity_credentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUseManagedIdentityCredentials"></a>

```python
acr_use_managed_identity_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#acr_use_managed_identity_credentials AppServiceSlot#acr_use_managed_identity_credentials}.

---

##### `acr_user_managed_identity_client_id`<sup>Optional</sup> <a name="acr_user_managed_identity_client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.acrUserManagedIdentityClientId"></a>

```python
acr_user_managed_identity_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#acr_user_managed_identity_client_id AppServiceSlot#acr_user_managed_identity_client_id}.

---

##### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#always_on AppServiceSlot#always_on}.

---

##### `app_command_line`<sup>Optional</sup> <a name="app_command_line" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.appCommandLine"></a>

```python
app_command_line: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_command_line AppServiceSlot#app_command_line}.

---

##### `auto_swap_slot_name`<sup>Optional</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.autoSwapSlotName"></a>

```python
auto_swap_slot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#auto_swap_slot_name AppServiceSlot#auto_swap_slot_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.cors"></a>

```python
cors: AppServiceSlotSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#cors AppServiceSlot#cors}

---

##### `default_documents`<sup>Optional</sup> <a name="default_documents" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.defaultDocuments"></a>

```python
default_documents: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#default_documents AppServiceSlot#default_documents}.

---

##### `dotnet_framework_version`<sup>Optional</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.dotnetFrameworkVersion"></a>

```python
dotnet_framework_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#dotnet_framework_version AppServiceSlot#dotnet_framework_version}.

---

##### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#ftps_state AppServiceSlot#ftps_state}.

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#health_check_path AppServiceSlot#health_check_path}.

---

##### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#http2_enabled AppServiceSlot#http2_enabled}.

---

##### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.ipRestriction"></a>

```python
ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#ip_restriction AppServiceSlot#ip_restriction}.

---

##### `java_container`<sup>Optional</sup> <a name="java_container" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainer"></a>

```python
java_container: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#java_container AppServiceSlot#java_container}.

---

##### `java_container_version`<sup>Optional</sup> <a name="java_container_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaContainerVersion"></a>

```python
java_container_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#java_container_version AppServiceSlot#java_container_version}.

---

##### `java_version`<sup>Optional</sup> <a name="java_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#java_version AppServiceSlot#java_version}.

---

##### `linux_fx_version`<sup>Optional</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.linuxFxVersion"></a>

```python
linux_fx_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#linux_fx_version AppServiceSlot#linux_fx_version}.

---

##### `local_mysql_enabled`<sup>Optional</sup> <a name="local_mysql_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.localMysqlEnabled"></a>

```python
local_mysql_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#local_mysql_enabled AppServiceSlot#local_mysql_enabled}.

---

##### `managed_pipeline_mode`<sup>Optional</sup> <a name="managed_pipeline_mode" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.managedPipelineMode"></a>

```python
managed_pipeline_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#managed_pipeline_mode AppServiceSlot#managed_pipeline_mode}.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#min_tls_version AppServiceSlot#min_tls_version}.

---

##### `number_of_workers`<sup>Optional</sup> <a name="number_of_workers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#number_of_workers AppServiceSlot#number_of_workers}.

---

##### `php_version`<sup>Optional</sup> <a name="php_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.phpVersion"></a>

```python
php_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#php_version AppServiceSlot#php_version}.

---

##### `python_version`<sup>Optional</sup> <a name="python_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#python_version AppServiceSlot#python_version}.

---

##### `remote_debugging_enabled`<sup>Optional</sup> <a name="remote_debugging_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingEnabled"></a>

```python
remote_debugging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#remote_debugging_enabled AppServiceSlot#remote_debugging_enabled}.

---

##### `remote_debugging_version`<sup>Optional</sup> <a name="remote_debugging_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.remoteDebuggingVersion"></a>

```python
remote_debugging_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#remote_debugging_version AppServiceSlot#remote_debugging_version}.

---

##### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmIpRestriction"></a>

```python
scm_ip_restriction: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#scm_ip_restriction AppServiceSlot#scm_ip_restriction}.

---

##### `scm_type`<sup>Optional</sup> <a name="scm_type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#scm_type AppServiceSlot#scm_type}.

---

##### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#scm_use_main_ip_restriction AppServiceSlot#scm_use_main_ip_restriction}.

---

##### `use32_bit_worker_process`<sup>Optional</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.use32BitWorkerProcess"></a>

```python
use32_bit_worker_process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#use_32_bit_worker_process AppServiceSlot#use_32_bit_worker_process}.

---

##### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#vnet_route_all_enabled AppServiceSlot#vnet_route_all_enabled}.

---

##### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#websockets_enabled AppServiceSlot#websockets_enabled}.

---

##### `windows_fx_version`<sup>Optional</sup> <a name="windows_fx_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig.property.windowsFxVersion"></a>

```python
windows_fx_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#windows_fx_version AppServiceSlot#windows_fx_version}.

---

### AppServiceSlotSiteConfigCors <a name="AppServiceSlotSiteConfigCors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigCors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#allowed_origins AppServiceSlot#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#support_credentials AppServiceSlot#support_credentials}. |

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#allowed_origins AppServiceSlot#allowed_origins}.

---

##### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#support_credentials AppServiceSlot#support_credentials}.

---

### AppServiceSlotSiteConfigIpRestriction <a name="AppServiceSlotSiteConfigIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigIpRestrictionHeaders]] = None,
  ip_address: str = None,
  name: str = None,
  priority: typing.Union[int, float] = None,
  service_tag: str = None,
  virtual_network_subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#action AppServiceSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#action AppServiceSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}.

---

### AppServiceSlotSiteConfigIpRestrictionHeaders <a name="AppServiceSlotSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}.

---

### AppServiceSlotSiteConfigScmIpRestriction <a name="AppServiceSlotSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigScmIpRestrictionHeaders]] = None,
  ip_address: str = None,
  name: str = None,
  priority: typing.Union[int, float] = None,
  service_tag: str = None,
  virtual_network_subnet_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#action AppServiceSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#action AppServiceSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#headers AppServiceSlot#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#ip_address AppServiceSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#priority AppServiceSlot#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#service_tag AppServiceSlot#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#virtual_network_subnet_id AppServiceSlot#virtual_network_subnet_id}.

---

### AppServiceSlotSiteConfigScmIpRestrictionHeaders <a name="AppServiceSlotSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_azure_fdid AppServiceSlot#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_fd_health_probe AppServiceSlot#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_forwarded_for AppServiceSlot#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#x_forwarded_host AppServiceSlot#x_forwarded_host}.

---

### AppServiceSlotSiteCredential <a name="AppServiceSlotSiteCredential" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteCredential()
```


### AppServiceSlotStorageAccount <a name="AppServiceSlotStorageAccount" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotStorageAccount(
  access_key: str,
  account_name: str,
  name: str,
  share_name: str,
  type: str,
  mount_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accessKey">access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#access_key AppServiceSlot#access_key}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accountName">account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#account_name AppServiceSlot#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.shareName">share_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#share_name AppServiceSlot#share_name}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#type AppServiceSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.mountPath">mount_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#mount_path AppServiceSlot#mount_path}. |

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#access_key AppServiceSlot#access_key}.

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#account_name AppServiceSlot#account_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#name AppServiceSlot#name}.

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#share_name AppServiceSlot#share_name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#type AppServiceSlot#type}.

---

##### `mount_path`<sup>Optional</sup> <a name="mount_path" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#mount_path AppServiceSlot#mount_path}.

---

### AppServiceSlotTimeouts <a name="AppServiceSlotTimeouts" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#create AppServiceSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#delete AppServiceSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#read AppServiceSlot#read}. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#update AppServiceSlot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#create AppServiceSlot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#delete AppServiceSlot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#read AppServiceSlot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#update AppServiceSlot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppServiceSlotAuthSettingsActiveDirectoryOutputReference <a name="AppServiceSlotAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">reset_allowed_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_audiences` <a name="reset_allowed_audiences" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```python
def reset_allowed_audiences() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowed_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audiences_input`<sup>Optional</sup> <a name="allowed_audiences_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```python
allowed_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `allowed_audiences`<sup>Required</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

---


### AppServiceSlotAuthSettingsFacebookOutputReference <a name="AppServiceSlotAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecretInput">app_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecret">app_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `app_secret_input`<sup>Optional</sup> <a name="app_secret_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```python
app_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.appSecret"></a>

```python
app_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

---


### AppServiceSlotAuthSettingsGoogleOutputReference <a name="AppServiceSlotAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

---


### AppServiceSlotAuthSettingsMicrosoftOutputReference <a name="AppServiceSlotAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

---


### AppServiceSlotAuthSettingsOutputReference <a name="AppServiceSlotAuthSettingsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putActiveDirectory">put_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putFacebook">put_facebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putGoogle">put_google</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putMicrosoft">put_microsoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putTwitter">put_twitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetActiveDirectory">reset_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAdditionalLoginParams">reset_additional_login_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">reset_allowed_external_redirect_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetDefaultProvider">reset_default_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetFacebook">reset_facebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetGoogle">reset_google</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetMicrosoft">reset_microsoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetRuntimeVersion">reset_runtime_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours">reset_token_refresh_extension_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenStoreEnabled">reset_token_store_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTwitter">reset_twitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction">reset_unauthenticated_client_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_directory` <a name="put_active_directory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putActiveDirectory"></a>

```python
def put_active_directory(
  client_id: str,
  allowed_audiences: typing.List[str] = None,
  client_secret: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putActiveDirectory.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

###### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putActiveDirectory.parameter.allowedAudiences"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#allowed_audiences AppServiceSlot#allowed_audiences}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putActiveDirectory.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

##### `put_facebook` <a name="put_facebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putFacebook"></a>

```python
def put_facebook(
  app_id: str,
  app_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putFacebook.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_id AppServiceSlot#app_id}.

---

###### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putFacebook.parameter.appSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#app_secret AppServiceSlot#app_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putFacebook.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

##### `put_google` <a name="put_google" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putGoogle"></a>

```python
def put_google(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putGoogle.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putGoogle.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putGoogle.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

##### `put_microsoft` <a name="put_microsoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putMicrosoft"></a>

```python
def put_microsoft(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putMicrosoft.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_id AppServiceSlot#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putMicrosoft.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#client_secret AppServiceSlot#client_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putMicrosoft.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#oauth_scopes AppServiceSlot#oauth_scopes}.

---

##### `put_twitter` <a name="put_twitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putTwitter"></a>

```python
def put_twitter(
  consumer_key: str,
  consumer_secret: str
) -> None
```

###### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putTwitter.parameter.consumerKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#consumer_key AppServiceSlot#consumer_key}.

---

###### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.putTwitter.parameter.consumerSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#consumer_secret AppServiceSlot#consumer_secret}.

---

##### `reset_active_directory` <a name="reset_active_directory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetActiveDirectory"></a>

```python
def reset_active_directory() -> None
```

##### `reset_additional_login_params` <a name="reset_additional_login_params" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```python
def reset_additional_login_params() -> None
```

##### `reset_allowed_external_redirect_urls` <a name="reset_allowed_external_redirect_urls" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```python
def reset_allowed_external_redirect_urls() -> None
```

##### `reset_default_provider` <a name="reset_default_provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetDefaultProvider"></a>

```python
def reset_default_provider() -> None
```

##### `reset_facebook` <a name="reset_facebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetFacebook"></a>

```python
def reset_facebook() -> None
```

##### `reset_google` <a name="reset_google" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetGoogle"></a>

```python
def reset_google() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_microsoft` <a name="reset_microsoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetMicrosoft"></a>

```python
def reset_microsoft() -> None
```

##### `reset_runtime_version` <a name="reset_runtime_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetRuntimeVersion"></a>

```python
def reset_runtime_version() -> None
```

##### `reset_token_refresh_extension_hours` <a name="reset_token_refresh_extension_hours" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```python
def reset_token_refresh_extension_hours() -> None
```

##### `reset_token_store_enabled` <a name="reset_token_store_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```python
def reset_token_store_enabled() -> None
```

##### `reset_twitter` <a name="reset_twitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetTwitter"></a>

```python
def reset_twitter() -> None
```

##### `reset_unauthenticated_client_action` <a name="reset_unauthenticated_client_action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```python
def reset_unauthenticated_client_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference">AppServiceSlotAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference">AppServiceSlotAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference">AppServiceSlotAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference">AppServiceSlotAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference">AppServiceSlotAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectoryInput">active_directory_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParamsInput">additional_login_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowed_external_redirect_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProviderInput">default_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebookInput">facebook_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.googleInput">google_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoftInput">microsoft_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">token_refresh_extension_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput">token_store_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitterInput">twitter_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticated_client_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParams">additional_login_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowed_external_redirect_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProvider">default_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours">token_refresh_extension_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabled">token_store_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticated_client_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectory"></a>

```python
active_directory: AppServiceSlotAuthSettingsActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectoryOutputReference">AppServiceSlotAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebook"></a>

```python
facebook: AppServiceSlotAuthSettingsFacebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebookOutputReference">AppServiceSlotAuthSettingsFacebookOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.google"></a>

```python
google: AppServiceSlotAuthSettingsGoogleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogleOutputReference">AppServiceSlotAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoft"></a>

```python
microsoft: AppServiceSlotAuthSettingsMicrosoftOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoftOutputReference">AppServiceSlotAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitter"></a>

```python
twitter: AppServiceSlotAuthSettingsTwitterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference">AppServiceSlotAuthSettingsTwitterOutputReference</a>

---

##### `active_directory_input`<sup>Optional</sup> <a name="active_directory_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```python
active_directory_input: AppServiceSlotAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsActiveDirectory">AppServiceSlotAuthSettingsActiveDirectory</a>

---

##### `additional_login_params_input`<sup>Optional</sup> <a name="additional_login_params_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```python
additional_login_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_external_redirect_urls_input`<sup>Optional</sup> <a name="allowed_external_redirect_urls_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```python
allowed_external_redirect_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_provider_input`<sup>Optional</sup> <a name="default_provider_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProviderInput"></a>

```python
default_provider_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `facebook_input`<sup>Optional</sup> <a name="facebook_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.facebookInput"></a>

```python
facebook_input: AppServiceSlotAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsFacebook">AppServiceSlotAuthSettingsFacebook</a>

---

##### `google_input`<sup>Optional</sup> <a name="google_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.googleInput"></a>

```python
google_input: AppServiceSlotAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsGoogle">AppServiceSlotAuthSettingsGoogle</a>

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `microsoft_input`<sup>Optional</sup> <a name="microsoft_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.microsoftInput"></a>

```python
microsoft_input: AppServiceSlotAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsMicrosoft">AppServiceSlotAuthSettingsMicrosoft</a>

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `token_refresh_extension_hours_input`<sup>Optional</sup> <a name="token_refresh_extension_hours_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```python
token_refresh_extension_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_store_enabled_input`<sup>Optional</sup> <a name="token_store_enabled_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```python
token_store_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `twitter_input`<sup>Optional</sup> <a name="twitter_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.twitterInput"></a>

```python
twitter_input: AppServiceSlotAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

---

##### `unauthenticated_client_action_input`<sup>Optional</sup> <a name="unauthenticated_client_action_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```python
unauthenticated_client_action_input: str
```

- *Type:* str

---

##### `additional_login_params`<sup>Required</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.additionalLoginParams"></a>

```python
additional_login_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_external_redirect_urls`<sup>Required</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```python
allowed_external_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_provider`<sup>Required</sup> <a name="default_provider" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.defaultProvider"></a>

```python
default_provider: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `token_refresh_extension_hours`<sup>Required</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```python
token_refresh_extension_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_store_enabled`<sup>Required</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```python
token_store_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unauthenticated_client_action`<sup>Required</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```python
unauthenticated_client_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettings">AppServiceSlotAuthSettings</a>

---


### AppServiceSlotAuthSettingsTwitterOutputReference <a name="AppServiceSlotAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumer_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_key_input`<sup>Optional</sup> <a name="consumer_key_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```python
consumer_key_input: str
```

- *Type:* str

---

##### `consumer_secret_input`<sup>Optional</sup> <a name="consumer_secret_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```python
consumer_secret_input: str
```

- *Type:* str

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitterOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotAuthSettingsTwitter">AppServiceSlotAuthSettingsTwitter</a>

---


### AppServiceSlotConnectionStringList <a name="AppServiceSlotConnectionStringList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSlotConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceSlotConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>]]

---


### AppServiceSlotConnectionStringOutputReference <a name="AppServiceSlotConnectionStringOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSlotConnectionString]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotConnectionString">AppServiceSlotConnectionString</a>]

---


### AppServiceSlotIdentityOutputReference <a name="AppServiceSlotIdentityOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentityOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotIdentity">AppServiceSlotIdentity</a>

---


### AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference <a name="AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput">level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput">sas_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.level">level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl">sas_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `level_input`<sup>Optional</sup> <a name="level_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.levelInput"></a>

```python
level_input: str
```

- *Type:* str

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sas_url_input`<sup>Optional</sup> <a name="sas_url_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```python
sas_url_input: str
```

- *Type:* str

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.level"></a>

```python
level: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```python
sas_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotLogsApplicationLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

---


### AppServiceSlotLogsApplicationLogsOutputReference <a name="AppServiceSlotLogsApplicationLogsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.putAzureBlobStorage">put_azure_blob_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetAzureBlobStorage">reset_azure_blob_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetFileSystemLevel">reset_file_system_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure_blob_storage` <a name="put_azure_blob_storage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.putAzureBlobStorage"></a>

```python
def put_azure_blob_storage(
  level: str,
  retention_in_days: typing.Union[int, float],
  sas_url: str
) -> None
```

###### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.putAzureBlobStorage.parameter.level"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#level AppServiceSlot#level}.

---

###### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.putAzureBlobStorage.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

###### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.putAzureBlobStorage.parameter.sasUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}.

---

##### `reset_azure_blob_storage` <a name="reset_azure_blob_storage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetAzureBlobStorage"></a>

```python
def reset_azure_blob_storage() -> None
```

##### `reset_file_system_level` <a name="reset_file_system_level" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.resetFileSystemLevel"></a>

```python
def reset_file_system_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorage">azure_blob_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference">AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorageInput">azure_blob_storage_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevelInput">file_system_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevel">file_system_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_blob_storage`<sup>Required</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorage"></a>

```python
azure_blob_storage: AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference">AppServiceSlotLogsApplicationLogsAzureBlobStorageOutputReference</a>

---

##### `azure_blob_storage_input`<sup>Optional</sup> <a name="azure_blob_storage_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.azureBlobStorageInput"></a>

```python
azure_blob_storage_input: AppServiceSlotLogsApplicationLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

---

##### `file_system_level_input`<sup>Optional</sup> <a name="file_system_level_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevelInput"></a>

```python
file_system_level_input: str
```

- *Type:* str

---

##### `file_system_level`<sup>Required</sup> <a name="file_system_level" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.fileSystemLevel"></a>

```python
file_system_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotLogsApplicationLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

---


### AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference <a name="AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput">sas_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl">sas_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sas_url_input`<sup>Optional</sup> <a name="sas_url_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrlInput"></a>

```python
sas_url_input: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.sasUrl"></a>

```python
sas_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotLogsHttpLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

---


### AppServiceSlotLogsHttpLogsFileSystemOutputReference <a name="AppServiceSlotLogsHttpLogsFileSystemOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput">retention_in_mb_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMb">retention_in_mb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_in_mb_input`<sup>Optional</sup> <a name="retention_in_mb_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMbInput"></a>

```python
retention_in_mb_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_in_mb`<sup>Required</sup> <a name="retention_in_mb" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.retentionInMb"></a>

```python
retention_in_mb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotLogsHttpLogsFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

---


### AppServiceSlotLogsHttpLogsOutputReference <a name="AppServiceSlotLogsHttpLogsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putAzureBlobStorage">put_azure_blob_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putFileSystem">put_file_system</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetAzureBlobStorage">reset_azure_blob_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetFileSystem">reset_file_system</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_azure_blob_storage` <a name="put_azure_blob_storage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putAzureBlobStorage"></a>

```python
def put_azure_blob_storage(
  retention_in_days: typing.Union[int, float],
  sas_url: str
) -> None
```

###### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putAzureBlobStorage.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

###### `sas_url`<sup>Required</sup> <a name="sas_url" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putAzureBlobStorage.parameter.sasUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#sas_url AppServiceSlot#sas_url}.

---

##### `put_file_system` <a name="put_file_system" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putFileSystem"></a>

```python
def put_file_system(
  retention_in_days: typing.Union[int, float],
  retention_in_mb: typing.Union[int, float]
) -> None
```

###### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putFileSystem.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_days AppServiceSlot#retention_in_days}.

---

###### `retention_in_mb`<sup>Required</sup> <a name="retention_in_mb" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.putFileSystem.parameter.retentionInMb"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#retention_in_mb AppServiceSlot#retention_in_mb}.

---

##### `reset_azure_blob_storage` <a name="reset_azure_blob_storage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetAzureBlobStorage"></a>

```python
def reset_azure_blob_storage() -> None
```

##### `reset_file_system` <a name="reset_file_system" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.resetFileSystem"></a>

```python
def reset_file_system() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorage">azure_blob_storage</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference">AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystem">file_system</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference">AppServiceSlotLogsHttpLogsFileSystemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorageInput">azure_blob_storage_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystemInput">file_system_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_blob_storage`<sup>Required</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorage"></a>

```python
azure_blob_storage: AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference">AppServiceSlotLogsHttpLogsAzureBlobStorageOutputReference</a>

---

##### `file_system`<sup>Required</sup> <a name="file_system" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystem"></a>

```python
file_system: AppServiceSlotLogsHttpLogsFileSystemOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystemOutputReference">AppServiceSlotLogsHttpLogsFileSystemOutputReference</a>

---

##### `azure_blob_storage_input`<sup>Optional</sup> <a name="azure_blob_storage_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.azureBlobStorageInput"></a>

```python
azure_blob_storage_input: AppServiceSlotLogsHttpLogsAzureBlobStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

---

##### `file_system_input`<sup>Optional</sup> <a name="file_system_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.fileSystemInput"></a>

```python
file_system_input: AppServiceSlotLogsHttpLogsFileSystem
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotLogsHttpLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

---


### AppServiceSlotLogsOutputReference <a name="AppServiceSlotLogsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putApplicationLogs">put_application_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putHttpLogs">put_http_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetApplicationLogs">reset_application_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetDetailedErrorMessagesEnabled">reset_detailed_error_messages_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetFailedRequestTracingEnabled">reset_failed_request_tracing_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetHttpLogs">reset_http_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_application_logs` <a name="put_application_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putApplicationLogs"></a>

```python
def put_application_logs(
  azure_blob_storage: AppServiceSlotLogsApplicationLogsAzureBlobStorage = None,
  file_system_level: str = None
) -> None
```

###### `azure_blob_storage`<sup>Optional</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putApplicationLogs.parameter.azureBlobStorage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsAzureBlobStorage">AppServiceSlotLogsApplicationLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#azure_blob_storage AppServiceSlot#azure_blob_storage}

---

###### `file_system_level`<sup>Optional</sup> <a name="file_system_level" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putApplicationLogs.parameter.fileSystemLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#file_system_level AppServiceSlot#file_system_level}.

---

##### `put_http_logs` <a name="put_http_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putHttpLogs"></a>

```python
def put_http_logs(
  azure_blob_storage: AppServiceSlotLogsHttpLogsAzureBlobStorage = None,
  file_system: AppServiceSlotLogsHttpLogsFileSystem = None
) -> None
```

###### `azure_blob_storage`<sup>Optional</sup> <a name="azure_blob_storage" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putHttpLogs.parameter.azureBlobStorage"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsAzureBlobStorage">AppServiceSlotLogsHttpLogsAzureBlobStorage</a>

azure_blob_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#azure_blob_storage AppServiceSlot#azure_blob_storage}

---

###### `file_system`<sup>Optional</sup> <a name="file_system" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.putHttpLogs.parameter.fileSystem"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsFileSystem">AppServiceSlotLogsHttpLogsFileSystem</a>

file_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#file_system AppServiceSlot#file_system}

---

##### `reset_application_logs` <a name="reset_application_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetApplicationLogs"></a>

```python
def reset_application_logs() -> None
```

##### `reset_detailed_error_messages_enabled` <a name="reset_detailed_error_messages_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetDetailedErrorMessagesEnabled"></a>

```python
def reset_detailed_error_messages_enabled() -> None
```

##### `reset_failed_request_tracing_enabled` <a name="reset_failed_request_tracing_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetFailedRequestTracingEnabled"></a>

```python
def reset_failed_request_tracing_enabled() -> None
```

##### `reset_http_logs` <a name="reset_http_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.resetHttpLogs"></a>

```python
def reset_http_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogs">application_logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference">AppServiceSlotLogsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogs">http_logs</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference">AppServiceSlotLogsHttpLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogsInput">application_logs_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabledInput">detailed_error_messages_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabledInput">failed_request_tracing_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogsInput">http_logs_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabled">detailed_error_messages_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabled">failed_request_tracing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_logs`<sup>Required</sup> <a name="application_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogs"></a>

```python
application_logs: AppServiceSlotLogsApplicationLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogsOutputReference">AppServiceSlotLogsApplicationLogsOutputReference</a>

---

##### `http_logs`<sup>Required</sup> <a name="http_logs" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogs"></a>

```python
http_logs: AppServiceSlotLogsHttpLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogsOutputReference">AppServiceSlotLogsHttpLogsOutputReference</a>

---

##### `application_logs_input`<sup>Optional</sup> <a name="application_logs_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.applicationLogsInput"></a>

```python
application_logs_input: AppServiceSlotLogsApplicationLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsApplicationLogs">AppServiceSlotLogsApplicationLogs</a>

---

##### `detailed_error_messages_enabled_input`<sup>Optional</sup> <a name="detailed_error_messages_enabled_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabledInput"></a>

```python
detailed_error_messages_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failed_request_tracing_enabled_input`<sup>Optional</sup> <a name="failed_request_tracing_enabled_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabledInput"></a>

```python
failed_request_tracing_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_logs_input`<sup>Optional</sup> <a name="http_logs_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.httpLogsInput"></a>

```python
http_logs_input: AppServiceSlotLogsHttpLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsHttpLogs">AppServiceSlotLogsHttpLogs</a>

---

##### `detailed_error_messages_enabled`<sup>Required</sup> <a name="detailed_error_messages_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.detailedErrorMessagesEnabled"></a>

```python
detailed_error_messages_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failed_request_tracing_enabled`<sup>Required</sup> <a name="failed_request_tracing_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.failedRequestTracingEnabled"></a>

```python
failed_request_tracing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogsOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotLogs">AppServiceSlotLogs</a>

---


### AppServiceSlotSiteConfigCorsOutputReference <a name="AppServiceSlotSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resetSupportCredentials">reset_support_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_support_credentials` <a name="reset_support_credentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```python
def reset_support_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentialsInput">support_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials_input`<sup>Optional</sup> <a name="support_credentials_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```python
support_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials`<sup>Required</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

---


### AppServiceSlotSiteConfigIpRestrictionHeadersList <a name="AppServiceSlotSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>]]

---


### AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference <a name="AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSlotSiteConfigIpRestrictionHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>]

---


### AppServiceSlotSiteConfigIpRestrictionList <a name="AppServiceSlotSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSlotSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>]]

---


### AppServiceSlotSiteConfigIpRestrictionOutputReference <a name="AppServiceSlotSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList">AppServiceSlotSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headers"></a>

```python
headers: AppServiceSlotSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeadersList">AppServiceSlotSiteConfigIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionHeaders">AppServiceSlotSiteConfigIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSlotSiteConfigIpRestriction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>]

---


### AppServiceSlotSiteConfigOutputReference <a name="AppServiceSlotSiteConfigOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putIpRestriction">put_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putScmIpRestriction">put_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUseManagedIdentityCredentials">reset_acr_use_managed_identity_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUserManagedIdentityClientId">reset_acr_user_managed_identity_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAlwaysOn">reset_always_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAppCommandLine">reset_app_command_line</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAutoSwapSlotName">reset_auto_swap_slot_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDefaultDocuments">reset_default_documents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDotnetFrameworkVersion">reset_dotnet_framework_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetFtpsState">reset_ftps_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHealthCheckPath">reset_health_check_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHttp2Enabled">reset_http2_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetIpRestriction">reset_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainer">reset_java_container</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainerVersion">reset_java_container_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaVersion">reset_java_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLinuxFxVersion">reset_linux_fx_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLocalMysqlEnabled">reset_local_mysql_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetManagedPipelineMode">reset_managed_pipeline_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetMinTlsVersion">reset_min_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetNumberOfWorkers">reset_number_of_workers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPhpVersion">reset_php_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPythonVersion">reset_python_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingEnabled">reset_remote_debugging_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingVersion">reset_remote_debugging_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmIpRestriction">reset_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmType">reset_scm_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmUseMainIpRestriction">reset_scm_use_main_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetUse32BitWorkerProcess">reset_use32_bit_worker_process</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetVnetRouteAllEnabled">reset_vnet_route_all_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWebsocketsEnabled">reset_websockets_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWindowsFxVersion">reset_windows_fx_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cors` <a name="put_cors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putCors"></a>

```python
def put_cors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putCors.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#allowed_origins AppServiceSlot#allowed_origins}.

---

###### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putCors.parameter.supportCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/app_service_slot#support_credentials AppServiceSlot#support_credentials}.

---

##### `put_ip_restriction` <a name="put_ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putIpRestriction"></a>

```python
def put_ip_restriction(
  value: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>]]

---

##### `put_scm_ip_restriction` <a name="put_scm_ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putScmIpRestriction"></a>

```python
def put_scm_ip_restriction(
  value: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigScmIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>]]

---

##### `reset_acr_use_managed_identity_credentials` <a name="reset_acr_use_managed_identity_credentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUseManagedIdentityCredentials"></a>

```python
def reset_acr_use_managed_identity_credentials() -> None
```

##### `reset_acr_user_managed_identity_client_id` <a name="reset_acr_user_managed_identity_client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAcrUserManagedIdentityClientId"></a>

```python
def reset_acr_user_managed_identity_client_id() -> None
```

##### `reset_always_on` <a name="reset_always_on" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAlwaysOn"></a>

```python
def reset_always_on() -> None
```

##### `reset_app_command_line` <a name="reset_app_command_line" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAppCommandLine"></a>

```python
def reset_app_command_line() -> None
```

##### `reset_auto_swap_slot_name` <a name="reset_auto_swap_slot_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```python
def reset_auto_swap_slot_name() -> None
```

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_default_documents` <a name="reset_default_documents" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDefaultDocuments"></a>

```python
def reset_default_documents() -> None
```

##### `reset_dotnet_framework_version` <a name="reset_dotnet_framework_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```python
def reset_dotnet_framework_version() -> None
```

##### `reset_ftps_state` <a name="reset_ftps_state" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetFtpsState"></a>

```python
def reset_ftps_state() -> None
```

##### `reset_health_check_path` <a name="reset_health_check_path" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHealthCheckPath"></a>

```python
def reset_health_check_path() -> None
```

##### `reset_http2_enabled` <a name="reset_http2_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetHttp2Enabled"></a>

```python
def reset_http2_enabled() -> None
```

##### `reset_ip_restriction` <a name="reset_ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetIpRestriction"></a>

```python
def reset_ip_restriction() -> None
```

##### `reset_java_container` <a name="reset_java_container" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainer"></a>

```python
def reset_java_container() -> None
```

##### `reset_java_container_version` <a name="reset_java_container_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaContainerVersion"></a>

```python
def reset_java_container_version() -> None
```

##### `reset_java_version` <a name="reset_java_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetJavaVersion"></a>

```python
def reset_java_version() -> None
```

##### `reset_linux_fx_version` <a name="reset_linux_fx_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLinuxFxVersion"></a>

```python
def reset_linux_fx_version() -> None
```

##### `reset_local_mysql_enabled` <a name="reset_local_mysql_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetLocalMysqlEnabled"></a>

```python
def reset_local_mysql_enabled() -> None
```

##### `reset_managed_pipeline_mode` <a name="reset_managed_pipeline_mode" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetManagedPipelineMode"></a>

```python
def reset_managed_pipeline_mode() -> None
```

##### `reset_min_tls_version` <a name="reset_min_tls_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetMinTlsVersion"></a>

```python
def reset_min_tls_version() -> None
```

##### `reset_number_of_workers` <a name="reset_number_of_workers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetNumberOfWorkers"></a>

```python
def reset_number_of_workers() -> None
```

##### `reset_php_version` <a name="reset_php_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPhpVersion"></a>

```python
def reset_php_version() -> None
```

##### `reset_python_version` <a name="reset_python_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetPythonVersion"></a>

```python
def reset_python_version() -> None
```

##### `reset_remote_debugging_enabled` <a name="reset_remote_debugging_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingEnabled"></a>

```python
def reset_remote_debugging_enabled() -> None
```

##### `reset_remote_debugging_version` <a name="reset_remote_debugging_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetRemoteDebuggingVersion"></a>

```python
def reset_remote_debugging_version() -> None
```

##### `reset_scm_ip_restriction` <a name="reset_scm_ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmIpRestriction"></a>

```python
def reset_scm_ip_restriction() -> None
```

##### `reset_scm_type` <a name="reset_scm_type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmType"></a>

```python
def reset_scm_type() -> None
```

##### `reset_scm_use_main_ip_restriction` <a name="reset_scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```python
def reset_scm_use_main_ip_restriction() -> None
```

##### `reset_use32_bit_worker_process` <a name="reset_use32_bit_worker_process" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```python
def reset_use32_bit_worker_process() -> None
```

##### `reset_vnet_route_all_enabled` <a name="reset_vnet_route_all_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```python
def reset_vnet_route_all_enabled() -> None
```

##### `reset_websockets_enabled` <a name="reset_websockets_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```python
def reset_websockets_enabled() -> None
```

##### `reset_windows_fx_version` <a name="reset_windows_fx_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.resetWindowsFxVersion"></a>

```python
def reset_windows_fx_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference">AppServiceSlotSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestriction">ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList">AppServiceSlotSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestriction">scm_ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList">AppServiceSlotSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentialsInput">acr_use_managed_identity_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientIdInput">acr_user_managed_identity_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOnInput">always_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLineInput">app_command_line_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotNameInput">auto_swap_slot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.corsInput">cors_input</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocumentsInput">default_documents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput">dotnet_framework_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsStateInput">ftps_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPathInput">health_check_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2EnabledInput">http2_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestrictionInput">ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerInput">java_container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersionInput">java_container_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersionInput">java_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersionInput">linux_fx_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabledInput">local_mysql_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineModeInput">managed_pipeline_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersionInput">min_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkersInput">number_of_workers_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersionInput">php_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersionInput">python_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabledInput">remote_debugging_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersionInput">remote_debugging_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestrictionInput">scm_ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmTypeInput">scm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scm_use_main_ip_restriction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput">use32_bit_worker_process_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnet_route_all_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabledInput">websockets_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersionInput">windows_fx_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentials">acr_use_managed_identity_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientId">acr_user_managed_identity_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLine">app_command_line</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotName">auto_swap_slot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocuments">default_documents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnet_framework_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsState">ftps_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainer">java_container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersion">java_container_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersion">java_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersion">linux_fx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabled">local_mysql_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineMode">managed_pipeline_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkers">number_of_workers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersion">php_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersion">python_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabled">remote_debugging_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersion">remote_debugging_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmType">scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcess">use32_bit_worker_process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersion">windows_fx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.cors"></a>

```python
cors: AppServiceSlotSiteConfigCorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCorsOutputReference">AppServiceSlotSiteConfigCorsOutputReference</a>

---

##### `ip_restriction`<sup>Required</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestriction"></a>

```python
ip_restriction: AppServiceSlotSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestrictionList">AppServiceSlotSiteConfigIpRestrictionList</a>

---

##### `scm_ip_restriction`<sup>Required</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestriction"></a>

```python
scm_ip_restriction: AppServiceSlotSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList">AppServiceSlotSiteConfigScmIpRestrictionList</a>

---

##### `acr_use_managed_identity_credentials_input`<sup>Optional</sup> <a name="acr_use_managed_identity_credentials_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentialsInput"></a>

```python
acr_use_managed_identity_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `acr_user_managed_identity_client_id_input`<sup>Optional</sup> <a name="acr_user_managed_identity_client_id_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientIdInput"></a>

```python
acr_user_managed_identity_client_id_input: str
```

- *Type:* str

---

##### `always_on_input`<sup>Optional</sup> <a name="always_on_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOnInput"></a>

```python
always_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_command_line_input`<sup>Optional</sup> <a name="app_command_line_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLineInput"></a>

```python
app_command_line_input: str
```

- *Type:* str

---

##### `auto_swap_slot_name_input`<sup>Optional</sup> <a name="auto_swap_slot_name_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```python
auto_swap_slot_name_input: str
```

- *Type:* str

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.corsInput"></a>

```python
cors_input: AppServiceSlotSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigCors">AppServiceSlotSiteConfigCors</a>

---

##### `default_documents_input`<sup>Optional</sup> <a name="default_documents_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocumentsInput"></a>

```python
default_documents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dotnet_framework_version_input`<sup>Optional</sup> <a name="dotnet_framework_version_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```python
dotnet_framework_version_input: str
```

- *Type:* str

---

##### `ftps_state_input`<sup>Optional</sup> <a name="ftps_state_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsStateInput"></a>

```python
ftps_state_input: str
```

- *Type:* str

---

##### `health_check_path_input`<sup>Optional</sup> <a name="health_check_path_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPathInput"></a>

```python
health_check_path_input: str
```

- *Type:* str

---

##### `http2_enabled_input`<sup>Optional</sup> <a name="http2_enabled_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2EnabledInput"></a>

```python
http2_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_restriction_input`<sup>Optional</sup> <a name="ip_restriction_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ipRestrictionInput"></a>

```python
ip_restriction_input: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigIpRestriction">AppServiceSlotSiteConfigIpRestriction</a>]]

---

##### `java_container_input`<sup>Optional</sup> <a name="java_container_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerInput"></a>

```python
java_container_input: str
```

- *Type:* str

---

##### `java_container_version_input`<sup>Optional</sup> <a name="java_container_version_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersionInput"></a>

```python
java_container_version_input: str
```

- *Type:* str

---

##### `java_version_input`<sup>Optional</sup> <a name="java_version_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersionInput"></a>

```python
java_version_input: str
```

- *Type:* str

---

##### `linux_fx_version_input`<sup>Optional</sup> <a name="linux_fx_version_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```python
linux_fx_version_input: str
```

- *Type:* str

---

##### `local_mysql_enabled_input`<sup>Optional</sup> <a name="local_mysql_enabled_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabledInput"></a>

```python
local_mysql_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_pipeline_mode_input`<sup>Optional</sup> <a name="managed_pipeline_mode_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineModeInput"></a>

```python
managed_pipeline_mode_input: str
```

- *Type:* str

---

##### `min_tls_version_input`<sup>Optional</sup> <a name="min_tls_version_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersionInput"></a>

```python
min_tls_version_input: str
```

- *Type:* str

---

##### `number_of_workers_input`<sup>Optional</sup> <a name="number_of_workers_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkersInput"></a>

```python
number_of_workers_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `php_version_input`<sup>Optional</sup> <a name="php_version_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersionInput"></a>

```python
php_version_input: str
```

- *Type:* str

---

##### `python_version_input`<sup>Optional</sup> <a name="python_version_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersionInput"></a>

```python
python_version_input: str
```

- *Type:* str

---

##### `remote_debugging_enabled_input`<sup>Optional</sup> <a name="remote_debugging_enabled_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabledInput"></a>

```python
remote_debugging_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_debugging_version_input`<sup>Optional</sup> <a name="remote_debugging_version_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersionInput"></a>

```python
remote_debugging_version_input: str
```

- *Type:* str

---

##### `scm_ip_restriction_input`<sup>Optional</sup> <a name="scm_ip_restriction_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```python
scm_ip_restriction_input: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>]]

---

##### `scm_type_input`<sup>Optional</sup> <a name="scm_type_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmTypeInput"></a>

```python
scm_type_input: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction_input`<sup>Optional</sup> <a name="scm_use_main_ip_restriction_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```python
scm_use_main_ip_restriction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker_process_input`<sup>Optional</sup> <a name="use32_bit_worker_process_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```python
use32_bit_worker_process_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled_input`<sup>Optional</sup> <a name="vnet_route_all_enabled_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```python
vnet_route_all_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled_input`<sup>Optional</sup> <a name="websockets_enabled_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```python
websockets_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `windows_fx_version_input`<sup>Optional</sup> <a name="windows_fx_version_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersionInput"></a>

```python
windows_fx_version_input: str
```

- *Type:* str

---

##### `acr_use_managed_identity_credentials`<sup>Required</sup> <a name="acr_use_managed_identity_credentials" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUseManagedIdentityCredentials"></a>

```python
acr_use_managed_identity_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `acr_user_managed_identity_client_id`<sup>Required</sup> <a name="acr_user_managed_identity_client_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.acrUserManagedIdentityClientId"></a>

```python
acr_user_managed_identity_client_id: str
```

- *Type:* str

---

##### `always_on`<sup>Required</sup> <a name="always_on" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_command_line`<sup>Required</sup> <a name="app_command_line" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.appCommandLine"></a>

```python
app_command_line: str
```

- *Type:* str

---

##### `auto_swap_slot_name`<sup>Required</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.autoSwapSlotName"></a>

```python
auto_swap_slot_name: str
```

- *Type:* str

---

##### `default_documents`<sup>Required</sup> <a name="default_documents" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.defaultDocuments"></a>

```python
default_documents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dotnet_framework_version`<sup>Required</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```python
dotnet_framework_version: str
```

- *Type:* str

---

##### `ftps_state`<sup>Required</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `http2_enabled`<sup>Required</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `java_container`<sup>Required</sup> <a name="java_container" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainer"></a>

```python
java_container: str
```

- *Type:* str

---

##### `java_container_version`<sup>Required</sup> <a name="java_container_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaContainerVersion"></a>

```python
java_container_version: str
```

- *Type:* str

---

##### `java_version`<sup>Required</sup> <a name="java_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

---

##### `linux_fx_version`<sup>Required</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.linuxFxVersion"></a>

```python
linux_fx_version: str
```

- *Type:* str

---

##### `local_mysql_enabled`<sup>Required</sup> <a name="local_mysql_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.localMysqlEnabled"></a>

```python
local_mysql_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `managed_pipeline_mode`<sup>Required</sup> <a name="managed_pipeline_mode" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.managedPipelineMode"></a>

```python
managed_pipeline_mode: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `number_of_workers`<sup>Required</sup> <a name="number_of_workers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.numberOfWorkers"></a>

```python
number_of_workers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `php_version`<sup>Required</sup> <a name="php_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.phpVersion"></a>

```python
php_version: str
```

- *Type:* str

---

##### `python_version`<sup>Required</sup> <a name="python_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.pythonVersion"></a>

```python
python_version: str
```

- *Type:* str

---

##### `remote_debugging_enabled`<sup>Required</sup> <a name="remote_debugging_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```python
remote_debugging_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_debugging_version`<sup>Required</sup> <a name="remote_debugging_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```python
remote_debugging_version: str
```

- *Type:* str

---

##### `scm_type`<sup>Required</sup> <a name="scm_type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction`<sup>Required</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker_process`<sup>Required</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```python
use32_bit_worker_process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled`<sup>Required</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled`<sup>Required</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `windows_fx_version`<sup>Required</sup> <a name="windows_fx_version" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.windowsFxVersion"></a>

```python
windows_fx_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfig">AppServiceSlotSiteConfig</a>

---


### AppServiceSlotSiteConfigScmIpRestrictionHeadersList <a name="AppServiceSlotSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>]]

---


### AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference <a name="AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSlotSiteConfigScmIpRestrictionHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>]

---


### AppServiceSlotSiteConfigScmIpRestrictionList <a name="AppServiceSlotSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSlotSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>]]

---


### AppServiceSlotSiteConfigScmIpRestrictionOutputReference <a name="AppServiceSlotSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigScmIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList">AppServiceSlotSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```python
headers: AppServiceSlotSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeadersList">AppServiceSlotSiteConfigScmIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[AppServiceSlotSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionHeaders">AppServiceSlotSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSlotSiteConfigScmIpRestriction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteConfigScmIpRestriction">AppServiceSlotSiteConfigScmIpRestriction</a>]

---


### AppServiceSlotSiteCredentialList <a name="AppServiceSlotSiteCredentialList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSlotSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### AppServiceSlotSiteCredentialOutputReference <a name="AppServiceSlotSiteCredentialOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotSiteCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential">AppServiceSlotSiteCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredentialOutputReference.property.internalValue"></a>

```python
internal_value: AppServiceSlotSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotSiteCredential">AppServiceSlotSiteCredential</a>

---


### AppServiceSlotStorageAccountList <a name="AppServiceSlotStorageAccountList" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotStorageAccountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AppServiceSlotStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AppServiceSlotStorageAccount]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>]]

---


### AppServiceSlotStorageAccountOutputReference <a name="AppServiceSlotStorageAccountOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotStorageAccountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resetMountPath">reset_mount_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mount_path` <a name="reset_mount_path" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.resetMountPath"></a>

```python
def reset_mount_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKeyInput">access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountNameInput">account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPathInput">mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareNameInput">share_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKey">access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountName">account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPath">mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareName">share_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_key_input`<sup>Optional</sup> <a name="access_key_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKeyInput"></a>

```python
access_key_input: str
```

- *Type:* str

---

##### `account_name_input`<sup>Optional</sup> <a name="account_name_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountNameInput"></a>

```python
account_name_input: str
```

- *Type:* str

---

##### `mount_path_input`<sup>Optional</sup> <a name="mount_path_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPathInput"></a>

```python
mount_path_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `share_name_input`<sup>Optional</sup> <a name="share_name_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareNameInput"></a>

```python
share_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `access_key`<sup>Required</sup> <a name="access_key" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accessKey"></a>

```python
access_key: str
```

- *Type:* str

---

##### `account_name`<sup>Required</sup> <a name="account_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.accountName"></a>

```python
account_name: str
```

- *Type:* str

---

##### `mount_path`<sup>Required</sup> <a name="mount_path" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.mountPath"></a>

```python
mount_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `share_name`<sup>Required</sup> <a name="share_name" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.shareName"></a>

```python
share_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccountOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSlotStorageAccount]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotStorageAccount">AppServiceSlotStorageAccount</a>]

---


### AppServiceSlotTimeoutsOutputReference <a name="AppServiceSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import app_service_slot

appServiceSlot.AppServiceSlotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AppServiceSlotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.appServiceSlot.AppServiceSlotTimeouts">AppServiceSlotTimeouts</a>]

---



