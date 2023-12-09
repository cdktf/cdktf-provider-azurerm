# `functionAppSlot` Submodule <a name="`functionAppSlot` Submodule" id="@cdktf/provider-azurerm.functionAppSlot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FunctionAppSlot <a name="FunctionAppSlot" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot azurerm_function_app_slot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_service_plan_id: str,
  function_app_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  storage_account_access_key: str,
  storage_account_name: str,
  app_settings: typing.Mapping[str] = None,
  auth_settings: FunctionAppSlotAuthSettings = None,
  connection_string: typing.Union[IResolvable, typing.List[FunctionAppSlotConnectionString]] = None,
  daily_memory_time_quota: typing.Union[int, float] = None,
  enable_builtin_logging: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: FunctionAppSlotIdentity = None,
  os_type: str = None,
  site_config: FunctionAppSlotSiteConfig = None,
  tags: typing.Mapping[str] = None,
  timeouts: FunctionAppSlotTimeouts = None,
  version: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_service_plan_id FunctionAppSlot#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.functionAppName">function_app_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#function_app_name FunctionAppSlot#function_app_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#location FunctionAppSlot#location}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#resource_group_name FunctionAppSlot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#storage_account_access_key FunctionAppSlot#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#storage_account_name FunctionAppSlot#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_settings FunctionAppSlot#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.dailyMemoryTimeQuota">daily_memory_time_quota</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#daily_memory_time_quota FunctionAppSlot#daily_memory_time_quota}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.enableBuiltinLogging">enable_builtin_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#enable_builtin_logging FunctionAppSlot#enable_builtin_logging}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#https_only FunctionAppSlot#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#id FunctionAppSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#os_type FunctionAppSlot#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#tags FunctionAppSlot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#version FunctionAppSlot#version}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.appServicePlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_service_plan_id FunctionAppSlot#app_service_plan_id}.

---

##### `function_app_name`<sup>Required</sup> <a name="function_app_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.functionAppName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#function_app_name FunctionAppSlot#function_app_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#location FunctionAppSlot#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#resource_group_name FunctionAppSlot#resource_group_name}.

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.storageAccountAccessKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#storage_account_access_key FunctionAppSlot#storage_account_access_key}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.storageAccountName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#storage_account_name FunctionAppSlot#storage_account_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.appSettings"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_settings FunctionAppSlot#app_settings}.

---

##### `auth_settings`<sup>Optional</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.authSettings"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#auth_settings FunctionAppSlot#auth_settings}

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.connectionString"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#connection_string FunctionAppSlot#connection_string}

---

##### `daily_memory_time_quota`<sup>Optional</sup> <a name="daily_memory_time_quota" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.dailyMemoryTimeQuota"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#daily_memory_time_quota FunctionAppSlot#daily_memory_time_quota}.

---

##### `enable_builtin_logging`<sup>Optional</sup> <a name="enable_builtin_logging" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.enableBuiltinLogging"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#enable_builtin_logging FunctionAppSlot#enable_builtin_logging}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.httpsOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#https_only FunctionAppSlot#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#id FunctionAppSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#identity FunctionAppSlot#identity}

---

##### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.osType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#os_type FunctionAppSlot#os_type}.

---

##### `site_config`<sup>Optional</sup> <a name="site_config" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.siteConfig"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#site_config FunctionAppSlot#site_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#tags FunctionAppSlot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#timeouts FunctionAppSlot#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#version FunctionAppSlot#version}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings">put_auth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putConnectionString">put_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig">put_site_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAppSettings">reset_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAuthSettings">reset_auth_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetConnectionString">reset_connection_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetDailyMemoryTimeQuota">reset_daily_memory_time_quota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnableBuiltinLogging">reset_enable_builtin_logging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetHttpsOnly">reset_https_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOsType">reset_os_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetSiteConfig">reset_site_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetVersion">reset_version</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auth_settings` <a name="put_auth_settings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings"></a>

```python
def put_auth_settings(
  enabled: typing.Union[bool, IResolvable],
  active_directory: FunctionAppSlotAuthSettingsActiveDirectory = None,
  additional_login_params: typing.Mapping[str] = None,
  allowed_external_redirect_urls: typing.List[str] = None,
  default_provider: str = None,
  facebook: FunctionAppSlotAuthSettingsFacebook = None,
  google: FunctionAppSlotAuthSettingsGoogle = None,
  issuer: str = None,
  microsoft: FunctionAppSlotAuthSettingsMicrosoft = None,
  runtime_version: str = None,
  token_refresh_extension_hours: typing.Union[int, float] = None,
  token_store_enabled: typing.Union[bool, IResolvable] = None,
  twitter: FunctionAppSlotAuthSettingsTwitter = None,
  unauthenticated_client_action: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}.

---

###### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.activeDirectory"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#active_directory FunctionAppSlot#active_directory}

---

###### `additional_login_params`<sup>Optional</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.additionalLoginParams"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#additional_login_params FunctionAppSlot#additional_login_params}.

---

###### `allowed_external_redirect_urls`<sup>Optional</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.allowedExternalRedirectUrls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#allowed_external_redirect_urls FunctionAppSlot#allowed_external_redirect_urls}.

---

###### `default_provider`<sup>Optional</sup> <a name="default_provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.defaultProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#default_provider FunctionAppSlot#default_provider}.

---

###### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.facebook"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#facebook FunctionAppSlot#facebook}

---

###### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.google"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#google FunctionAppSlot#google}

---

###### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.issuer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#issuer FunctionAppSlot#issuer}.

---

###### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.microsoft"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#microsoft FunctionAppSlot#microsoft}

---

###### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.runtimeVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#runtime_version FunctionAppSlot#runtime_version}.

---

###### `token_refresh_extension_hours`<sup>Optional</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.tokenRefreshExtensionHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#token_refresh_extension_hours FunctionAppSlot#token_refresh_extension_hours}.

---

###### `token_store_enabled`<sup>Optional</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.tokenStoreEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#token_store_enabled FunctionAppSlot#token_store_enabled}.

---

###### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.twitter"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#twitter FunctionAppSlot#twitter}

---

###### `unauthenticated_client_action`<sup>Optional</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putAuthSettings.parameter.unauthenticatedClientAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#unauthenticated_client_action FunctionAppSlot#unauthenticated_client_action}.

---

##### `put_connection_string` <a name="put_connection_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putConnectionString"></a>

```python
def put_connection_string(
  value: typing.Union[IResolvable, typing.List[FunctionAppSlotConnectionString]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putConnectionString.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>]]

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#type FunctionAppSlot#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#identity_ids FunctionAppSlot#identity_ids}.

---

##### `put_site_config` <a name="put_site_config" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig"></a>

```python
def put_site_config(
  always_on: typing.Union[bool, IResolvable] = None,
  app_scale_limit: typing.Union[int, float] = None,
  auto_swap_slot_name: str = None,
  cors: FunctionAppSlotSiteConfigCors = None,
  dotnet_framework_version: str = None,
  elastic_instance_minimum: typing.Union[int, float] = None,
  ftps_state: str = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigIpRestriction]] = None,
  java_version: str = None,
  linux_fx_version: str = None,
  min_tls_version: str = None,
  pre_warmed_instance_count: typing.Union[int, float] = None,
  runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigScmIpRestriction]] = None,
  scm_type: str = None,
  scm_use_main_ip_restriction: typing.Union[bool, IResolvable] = None,
  use32_bit_worker_process: typing.Union[bool, IResolvable] = None,
  vnet_route_all_enabled: typing.Union[bool, IResolvable] = None,
  websockets_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.alwaysOn"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#always_on FunctionAppSlot#always_on}.

---

###### `app_scale_limit`<sup>Optional</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.appScaleLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_scale_limit FunctionAppSlot#app_scale_limit}.

---

###### `auto_swap_slot_name`<sup>Optional</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.autoSwapSlotName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#auto_swap_slot_name FunctionAppSlot#auto_swap_slot_name}.

---

###### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.cors"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#cors FunctionAppSlot#cors}

---

###### `dotnet_framework_version`<sup>Optional</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.dotnetFrameworkVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#dotnet_framework_version FunctionAppSlot#dotnet_framework_version}.

---

###### `elastic_instance_minimum`<sup>Optional</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.elasticInstanceMinimum"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#elastic_instance_minimum FunctionAppSlot#elastic_instance_minimum}.

---

###### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.ftpsState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#ftps_state FunctionAppSlot#ftps_state}.

---

###### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.healthCheckPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#health_check_path FunctionAppSlot#health_check_path}.

---

###### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.http2Enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#http2_enabled FunctionAppSlot#http2_enabled}.

---

###### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.ipRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#ip_restriction FunctionAppSlot#ip_restriction}.

---

###### `java_version`<sup>Optional</sup> <a name="java_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.javaVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#java_version FunctionAppSlot#java_version}.

---

###### `linux_fx_version`<sup>Optional</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.linuxFxVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#linux_fx_version FunctionAppSlot#linux_fx_version}.

---

###### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.minTlsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#min_tls_version FunctionAppSlot#min_tls_version}.

---

###### `pre_warmed_instance_count`<sup>Optional</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.preWarmedInstanceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#pre_warmed_instance_count FunctionAppSlot#pre_warmed_instance_count}.

---

###### `runtime_scale_monitoring_enabled`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.runtimeScaleMonitoringEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#runtime_scale_monitoring_enabled FunctionAppSlot#runtime_scale_monitoring_enabled}.

---

###### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.scmIpRestriction"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#scm_ip_restriction FunctionAppSlot#scm_ip_restriction}.

---

###### `scm_type`<sup>Optional</sup> <a name="scm_type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.scmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#scm_type FunctionAppSlot#scm_type}.

---

###### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.scmUseMainIpRestriction"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#scm_use_main_ip_restriction FunctionAppSlot#scm_use_main_ip_restriction}.

---

###### `use32_bit_worker_process`<sup>Optional</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.use32BitWorkerProcess"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#use_32_bit_worker_process FunctionAppSlot#use_32_bit_worker_process}.

---

###### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.vnetRouteAllEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#vnet_route_all_enabled FunctionAppSlot#vnet_route_all_enabled}.

---

###### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putSiteConfig.parameter.websocketsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#websockets_enabled FunctionAppSlot#websockets_enabled}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#create FunctionAppSlot#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#delete FunctionAppSlot#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#read FunctionAppSlot#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#update FunctionAppSlot#update}.

---

##### `reset_app_settings` <a name="reset_app_settings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAppSettings"></a>

```python
def reset_app_settings() -> None
```

##### `reset_auth_settings` <a name="reset_auth_settings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetAuthSettings"></a>

```python
def reset_auth_settings() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```

##### `reset_daily_memory_time_quota` <a name="reset_daily_memory_time_quota" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetDailyMemoryTimeQuota"></a>

```python
def reset_daily_memory_time_quota() -> None
```

##### `reset_enable_builtin_logging` <a name="reset_enable_builtin_logging" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnableBuiltinLogging"></a>

```python
def reset_enable_builtin_logging() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_https_only` <a name="reset_https_only" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetHttpsOnly"></a>

```python
def reset_https_only() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_os_type` <a name="reset_os_type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetOsType"></a>

```python
def reset_os_type() -> None
```

##### `reset_site_config` <a name="reset_site_config" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetSiteConfig"></a>

```python
def reset_site_config() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.resetVersion"></a>

```python
def reset_version() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FunctionAppSlot resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FunctionAppSlot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FunctionAppSlot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FunctionAppSlot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FunctionAppSlot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference">FunctionAppSlotAuthSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionString">connection_string</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList">FunctionAppSlotConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.defaultHostname">default_hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference">FunctionAppSlotIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.outboundIpAddresses">outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.possibleOutboundIpAddresses">possible_outbound_ip_addresses</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference">FunctionAppSlotSiteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteCredential">site_credential</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList">FunctionAppSlotSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference">FunctionAppSlotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanIdInput">app_service_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettingsInput">app_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettingsInput">auth_settings_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionStringInput">connection_string_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuotaInput">daily_memory_time_quota_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLoggingInput">enable_builtin_logging_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppNameInput">function_app_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnlyInput">https_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osTypeInput">os_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfigInput">site_config_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKeyInput">storage_account_access_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountNameInput">storage_account_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuota">daily_memory_time_quota</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLogging">enable_builtin_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppName">function_app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osType">os_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auth_settings`<sup>Required</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettings"></a>

```python
auth_settings: FunctionAppSlotAuthSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference">FunctionAppSlotAuthSettingsOutputReference</a>

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionString"></a>

```python
connection_string: FunctionAppSlotConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList">FunctionAppSlotConnectionStringList</a>

---

##### `default_hostname`<sup>Required</sup> <a name="default_hostname" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.defaultHostname"></a>

```python
default_hostname: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identity"></a>

```python
identity: FunctionAppSlotIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference">FunctionAppSlotIdentityOutputReference</a>

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `outbound_ip_addresses`<sup>Required</sup> <a name="outbound_ip_addresses" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.outboundIpAddresses"></a>

```python
outbound_ip_addresses: str
```

- *Type:* str

---

##### `possible_outbound_ip_addresses`<sup>Required</sup> <a name="possible_outbound_ip_addresses" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.possibleOutboundIpAddresses"></a>

```python
possible_outbound_ip_addresses: str
```

- *Type:* str

---

##### `site_config`<sup>Required</sup> <a name="site_config" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfig"></a>

```python
site_config: FunctionAppSlotSiteConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference">FunctionAppSlotSiteConfigOutputReference</a>

---

##### `site_credential`<sup>Required</sup> <a name="site_credential" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteCredential"></a>

```python
site_credential: FunctionAppSlotSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList">FunctionAppSlotSiteCredentialList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeouts"></a>

```python
timeouts: FunctionAppSlotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference">FunctionAppSlotTimeoutsOutputReference</a>

---

##### `app_service_plan_id_input`<sup>Optional</sup> <a name="app_service_plan_id_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanIdInput"></a>

```python
app_service_plan_id_input: str
```

- *Type:* str

---

##### `app_settings_input`<sup>Optional</sup> <a name="app_settings_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettingsInput"></a>

```python
app_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `auth_settings_input`<sup>Optional</sup> <a name="auth_settings_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.authSettingsInput"></a>

```python
auth_settings_input: FunctionAppSlotAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.connectionStringInput"></a>

```python
connection_string_input: typing.Union[IResolvable, typing.List[FunctionAppSlotConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>]]

---

##### `daily_memory_time_quota_input`<sup>Optional</sup> <a name="daily_memory_time_quota_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuotaInput"></a>

```python
daily_memory_time_quota_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_builtin_logging_input`<sup>Optional</sup> <a name="enable_builtin_logging_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLoggingInput"></a>

```python
enable_builtin_logging_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `function_app_name_input`<sup>Optional</sup> <a name="function_app_name_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppNameInput"></a>

```python
function_app_name_input: str
```

- *Type:* str

---

##### `https_only_input`<sup>Optional</sup> <a name="https_only_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnlyInput"></a>

```python
https_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.identityInput"></a>

```python
identity_input: FunctionAppSlotIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_type_input`<sup>Optional</sup> <a name="os_type_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osTypeInput"></a>

```python
os_type_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `site_config_input`<sup>Optional</sup> <a name="site_config_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.siteConfigInput"></a>

```python
site_config_input: FunctionAppSlotSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

---

##### `storage_account_access_key_input`<sup>Optional</sup> <a name="storage_account_access_key_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKeyInput"></a>

```python
storage_account_access_key_input: str
```

- *Type:* str

---

##### `storage_account_name_input`<sup>Optional</sup> <a name="storage_account_name_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountNameInput"></a>

```python
storage_account_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FunctionAppSlotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appServicePlanId"></a>

```python
app_service_plan_id: str
```

- *Type:* str

---

##### `app_settings`<sup>Required</sup> <a name="app_settings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `daily_memory_time_quota`<sup>Required</sup> <a name="daily_memory_time_quota" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.dailyMemoryTimeQuota"></a>

```python
daily_memory_time_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_builtin_logging`<sup>Required</sup> <a name="enable_builtin_logging" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enableBuiltinLogging"></a>

```python
enable_builtin_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `function_app_name`<sup>Required</sup> <a name="function_app_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.functionAppName"></a>

```python
function_app_name: str
```

- *Type:* str

---

##### `https_only`<sup>Required</sup> <a name="https_only" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_type`<sup>Required</sup> <a name="os_type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.osType"></a>

```python
os_type: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FunctionAppSlotAuthSettings <a name="FunctionAppSlotAuthSettings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettings(
  enabled: typing.Union[bool, IResolvable],
  active_directory: FunctionAppSlotAuthSettingsActiveDirectory = None,
  additional_login_params: typing.Mapping[str] = None,
  allowed_external_redirect_urls: typing.List[str] = None,
  default_provider: str = None,
  facebook: FunctionAppSlotAuthSettingsFacebook = None,
  google: FunctionAppSlotAuthSettingsGoogle = None,
  issuer: str = None,
  microsoft: FunctionAppSlotAuthSettingsMicrosoft = None,
  runtime_version: str = None,
  token_refresh_extension_hours: typing.Union[int, float] = None,
  token_store_enabled: typing.Union[bool, IResolvable] = None,
  twitter: FunctionAppSlotAuthSettingsTwitter = None,
  unauthenticated_client_action: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a></code> | active_directory block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.additionalLoginParams">additional_login_params</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#additional_login_params FunctionAppSlot#additional_login_params}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.allowedExternalRedirectUrls">allowed_external_redirect_urls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#allowed_external_redirect_urls FunctionAppSlot#allowed_external_redirect_urls}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.defaultProvider">default_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#default_provider FunctionAppSlot#default_provider}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a></code> | facebook block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a></code> | google block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.issuer">issuer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#issuer FunctionAppSlot#issuer}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a></code> | microsoft block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#runtime_version FunctionAppSlot#runtime_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenRefreshExtensionHours">token_refresh_extension_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#token_refresh_extension_hours FunctionAppSlot#token_refresh_extension_hours}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenStoreEnabled">token_store_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#token_store_enabled FunctionAppSlot#token_store_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a></code> | twitter block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.unauthenticatedClientAction">unauthenticated_client_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#unauthenticated_client_action FunctionAppSlot#unauthenticated_client_action}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}.

---

##### `active_directory`<sup>Optional</sup> <a name="active_directory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.activeDirectory"></a>

```python
active_directory: FunctionAppSlotAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

active_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#active_directory FunctionAppSlot#active_directory}

---

##### `additional_login_params`<sup>Optional</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.additionalLoginParams"></a>

```python
additional_login_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#additional_login_params FunctionAppSlot#additional_login_params}.

---

##### `allowed_external_redirect_urls`<sup>Optional</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.allowedExternalRedirectUrls"></a>

```python
allowed_external_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#allowed_external_redirect_urls FunctionAppSlot#allowed_external_redirect_urls}.

---

##### `default_provider`<sup>Optional</sup> <a name="default_provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.defaultProvider"></a>

```python
default_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#default_provider FunctionAppSlot#default_provider}.

---

##### `facebook`<sup>Optional</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.facebook"></a>

```python
facebook: FunctionAppSlotAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

facebook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#facebook FunctionAppSlot#facebook}

---

##### `google`<sup>Optional</sup> <a name="google" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.google"></a>

```python
google: FunctionAppSlotAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

google block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#google FunctionAppSlot#google}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#issuer FunctionAppSlot#issuer}.

---

##### `microsoft`<sup>Optional</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.microsoft"></a>

```python
microsoft: FunctionAppSlotAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

microsoft block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#microsoft FunctionAppSlot#microsoft}

---

##### `runtime_version`<sup>Optional</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#runtime_version FunctionAppSlot#runtime_version}.

---

##### `token_refresh_extension_hours`<sup>Optional</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenRefreshExtensionHours"></a>

```python
token_refresh_extension_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#token_refresh_extension_hours FunctionAppSlot#token_refresh_extension_hours}.

---

##### `token_store_enabled`<sup>Optional</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.tokenStoreEnabled"></a>

```python
token_store_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#token_store_enabled FunctionAppSlot#token_store_enabled}.

---

##### `twitter`<sup>Optional</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.twitter"></a>

```python
twitter: FunctionAppSlotAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

twitter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#twitter FunctionAppSlot#twitter}

---

##### `unauthenticated_client_action`<sup>Optional</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings.property.unauthenticatedClientAction"></a>

```python
unauthenticated_client_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#unauthenticated_client_action FunctionAppSlot#unauthenticated_client_action}.

---

### FunctionAppSlotAuthSettingsActiveDirectory <a name="FunctionAppSlotAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory(
  client_id: str,
  allowed_audiences: typing.List[str] = None,
  client_secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#allowed_audiences FunctionAppSlot#allowed_audiences}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

##### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#allowed_audiences FunctionAppSlot#allowed_audiences}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

### FunctionAppSlotAuthSettingsFacebook <a name="FunctionAppSlotAuthSettingsFacebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettingsFacebook(
  app_id: str,
  app_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appId">app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_id FunctionAppSlot#app_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appSecret">app_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_secret FunctionAppSlot#app_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}. |

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appId"></a>

```python
app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_id FunctionAppSlot#app_id}.

---

##### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.appSecret"></a>

```python
app_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_secret FunctionAppSlot#app_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

### FunctionAppSlotAuthSettingsGoogle <a name="FunctionAppSlotAuthSettingsGoogle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettingsGoogle(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

### FunctionAppSlotAuthSettingsMicrosoft <a name="FunctionAppSlotAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}. |

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

##### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

### FunctionAppSlotAuthSettingsTwitter <a name="FunctionAppSlotAuthSettingsTwitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettingsTwitter(
  consumer_key: str,
  consumer_secret: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerKey">consumer_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#consumer_key FunctionAppSlot#consumer_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#consumer_secret FunctionAppSlot#consumer_secret}. |

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#consumer_key FunctionAppSlot#consumer_key}.

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#consumer_secret FunctionAppSlot#consumer_secret}.

---

### FunctionAppSlotConfig <a name="FunctionAppSlotConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  app_service_plan_id: str,
  function_app_name: str,
  location: str,
  name: str,
  resource_group_name: str,
  storage_account_access_key: str,
  storage_account_name: str,
  app_settings: typing.Mapping[str] = None,
  auth_settings: FunctionAppSlotAuthSettings = None,
  connection_string: typing.Union[IResolvable, typing.List[FunctionAppSlotConnectionString]] = None,
  daily_memory_time_quota: typing.Union[int, float] = None,
  enable_builtin_logging: typing.Union[bool, IResolvable] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  https_only: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: FunctionAppSlotIdentity = None,
  os_type: str = None,
  site_config: FunctionAppSlotSiteConfig = None,
  tags: typing.Mapping[str] = None,
  timeouts: FunctionAppSlotTimeouts = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appServicePlanId">app_service_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_service_plan_id FunctionAppSlot#app_service_plan_id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.functionAppName">function_app_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#function_app_name FunctionAppSlot#function_app_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#location FunctionAppSlot#location}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#resource_group_name FunctionAppSlot#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountAccessKey">storage_account_access_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#storage_account_access_key FunctionAppSlot#storage_account_access_key}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountName">storage_account_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#storage_account_name FunctionAppSlot#storage_account_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_settings FunctionAppSlot#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.authSettings">auth_settings</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a></code> | auth_settings block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connectionString">connection_string</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>]]</code> | connection_string block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dailyMemoryTimeQuota">daily_memory_time_quota</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#daily_memory_time_quota FunctionAppSlot#daily_memory_time_quota}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enableBuiltinLogging">enable_builtin_logging</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#enable_builtin_logging FunctionAppSlot#enable_builtin_logging}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.httpsOnly">https_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#https_only FunctionAppSlot#https_only}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#id FunctionAppSlot#id}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.osType">os_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#os_type FunctionAppSlot#os_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.siteConfig">site_config</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a></code> | site_config block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#tags FunctionAppSlot#tags}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#version FunctionAppSlot#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_service_plan_id`<sup>Required</sup> <a name="app_service_plan_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appServicePlanId"></a>

```python
app_service_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_service_plan_id FunctionAppSlot#app_service_plan_id}.

---

##### `function_app_name`<sup>Required</sup> <a name="function_app_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.functionAppName"></a>

```python
function_app_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#function_app_name FunctionAppSlot#function_app_name}.

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#location FunctionAppSlot#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#resource_group_name FunctionAppSlot#resource_group_name}.

---

##### `storage_account_access_key`<sup>Required</sup> <a name="storage_account_access_key" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountAccessKey"></a>

```python
storage_account_access_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#storage_account_access_key FunctionAppSlot#storage_account_access_key}.

---

##### `storage_account_name`<sup>Required</sup> <a name="storage_account_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.storageAccountName"></a>

```python
storage_account_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#storage_account_name FunctionAppSlot#storage_account_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_settings FunctionAppSlot#app_settings}.

---

##### `auth_settings`<sup>Optional</sup> <a name="auth_settings" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.authSettings"></a>

```python
auth_settings: FunctionAppSlotAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

auth_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#auth_settings FunctionAppSlot#auth_settings}

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.connectionString"></a>

```python
connection_string: typing.Union[IResolvable, typing.List[FunctionAppSlotConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>]]

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#connection_string FunctionAppSlot#connection_string}

---

##### `daily_memory_time_quota`<sup>Optional</sup> <a name="daily_memory_time_quota" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.dailyMemoryTimeQuota"></a>

```python
daily_memory_time_quota: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#daily_memory_time_quota FunctionAppSlot#daily_memory_time_quota}.

---

##### `enable_builtin_logging`<sup>Optional</sup> <a name="enable_builtin_logging" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enableBuiltinLogging"></a>

```python
enable_builtin_logging: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#enable_builtin_logging FunctionAppSlot#enable_builtin_logging}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#enabled FunctionAppSlot#enabled}.

---

##### `https_only`<sup>Optional</sup> <a name="https_only" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.httpsOnly"></a>

```python
https_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#https_only FunctionAppSlot#https_only}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#id FunctionAppSlot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.identity"></a>

```python
identity: FunctionAppSlotIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#identity FunctionAppSlot#identity}

---

##### `os_type`<sup>Optional</sup> <a name="os_type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.osType"></a>

```python
os_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#os_type FunctionAppSlot#os_type}.

---

##### `site_config`<sup>Optional</sup> <a name="site_config" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.siteConfig"></a>

```python
site_config: FunctionAppSlotSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

site_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#site_config FunctionAppSlot#site_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#tags FunctionAppSlot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.timeouts"></a>

```python
timeouts: FunctionAppSlotTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#timeouts FunctionAppSlot#timeouts}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#version FunctionAppSlot#version}.

---

### FunctionAppSlotConnectionString <a name="FunctionAppSlotConnectionString" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotConnectionString(
  name: str,
  type: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#type FunctionAppSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#value FunctionAppSlot#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#type FunctionAppSlot#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#value FunctionAppSlot#value}.

---

### FunctionAppSlotIdentity <a name="FunctionAppSlotIdentity" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#type FunctionAppSlot#type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#identity_ids FunctionAppSlot#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#type FunctionAppSlot#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#identity_ids FunctionAppSlot#identity_ids}.

---

### FunctionAppSlotSiteConfig <a name="FunctionAppSlotSiteConfig" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfig(
  always_on: typing.Union[bool, IResolvable] = None,
  app_scale_limit: typing.Union[int, float] = None,
  auto_swap_slot_name: str = None,
  cors: FunctionAppSlotSiteConfigCors = None,
  dotnet_framework_version: str = None,
  elastic_instance_minimum: typing.Union[int, float] = None,
  ftps_state: str = None,
  health_check_path: str = None,
  http2_enabled: typing.Union[bool, IResolvable] = None,
  ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigIpRestriction]] = None,
  java_version: str = None,
  linux_fx_version: str = None,
  min_tls_version: str = None,
  pre_warmed_instance_count: typing.Union[int, float] = None,
  runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable] = None,
  scm_ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigScmIpRestriction]] = None,
  scm_type: str = None,
  scm_use_main_ip_restriction: typing.Union[bool, IResolvable] = None,
  use32_bit_worker_process: typing.Union[bool, IResolvable] = None,
  vnet_route_all_enabled: typing.Union[bool, IResolvable] = None,
  websockets_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#always_on FunctionAppSlot#always_on}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.appScaleLimit">app_scale_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_scale_limit FunctionAppSlot#app_scale_limit}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.autoSwapSlotName">auto_swap_slot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#auto_swap_slot_name FunctionAppSlot#auto_swap_slot_name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a></code> | cors block. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.dotnetFrameworkVersion">dotnet_framework_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#dotnet_framework_version FunctionAppSlot#dotnet_framework_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.elasticInstanceMinimum">elastic_instance_minimum</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#elastic_instance_minimum FunctionAppSlot#elastic_instance_minimum}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ftpsState">ftps_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#ftps_state FunctionAppSlot#ftps_state}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#health_check_path FunctionAppSlot#health_check_path}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#http2_enabled FunctionAppSlot#http2_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ipRestriction">ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#ip_restriction FunctionAppSlot#ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.javaVersion">java_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#java_version FunctionAppSlot#java_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.linuxFxVersion">linux_fx_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#linux_fx_version FunctionAppSlot#linux_fx_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#min_tls_version FunctionAppSlot#min_tls_version}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.preWarmedInstanceCount">pre_warmed_instance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#pre_warmed_instance_count FunctionAppSlot#pre_warmed_instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.runtimeScaleMonitoringEnabled">runtime_scale_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#runtime_scale_monitoring_enabled FunctionAppSlot#runtime_scale_monitoring_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmIpRestriction">scm_ip_restriction</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#scm_ip_restriction FunctionAppSlot#scm_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmType">scm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#scm_type FunctionAppSlot#scm_type}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#scm_use_main_ip_restriction FunctionAppSlot#scm_use_main_ip_restriction}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.use32BitWorkerProcess">use32_bit_worker_process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#use_32_bit_worker_process FunctionAppSlot#use_32_bit_worker_process}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#vnet_route_all_enabled FunctionAppSlot#vnet_route_all_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#websockets_enabled FunctionAppSlot#websockets_enabled}. |

---

##### `always_on`<sup>Optional</sup> <a name="always_on" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#always_on FunctionAppSlot#always_on}.

---

##### `app_scale_limit`<sup>Optional</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.appScaleLimit"></a>

```python
app_scale_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_scale_limit FunctionAppSlot#app_scale_limit}.

---

##### `auto_swap_slot_name`<sup>Optional</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.autoSwapSlotName"></a>

```python
auto_swap_slot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#auto_swap_slot_name FunctionAppSlot#auto_swap_slot_name}.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.cors"></a>

```python
cors: FunctionAppSlotSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

cors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#cors FunctionAppSlot#cors}

---

##### `dotnet_framework_version`<sup>Optional</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.dotnetFrameworkVersion"></a>

```python
dotnet_framework_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#dotnet_framework_version FunctionAppSlot#dotnet_framework_version}.

---

##### `elastic_instance_minimum`<sup>Optional</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.elasticInstanceMinimum"></a>

```python
elastic_instance_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#elastic_instance_minimum FunctionAppSlot#elastic_instance_minimum}.

---

##### `ftps_state`<sup>Optional</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#ftps_state FunctionAppSlot#ftps_state}.

---

##### `health_check_path`<sup>Optional</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#health_check_path FunctionAppSlot#health_check_path}.

---

##### `http2_enabled`<sup>Optional</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#http2_enabled FunctionAppSlot#http2_enabled}.

---

##### `ip_restriction`<sup>Optional</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.ipRestriction"></a>

```python
ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#ip_restriction FunctionAppSlot#ip_restriction}.

---

##### `java_version`<sup>Optional</sup> <a name="java_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#java_version FunctionAppSlot#java_version}.

---

##### `linux_fx_version`<sup>Optional</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.linuxFxVersion"></a>

```python
linux_fx_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#linux_fx_version FunctionAppSlot#linux_fx_version}.

---

##### `min_tls_version`<sup>Optional</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#min_tls_version FunctionAppSlot#min_tls_version}.

---

##### `pre_warmed_instance_count`<sup>Optional</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.preWarmedInstanceCount"></a>

```python
pre_warmed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#pre_warmed_instance_count FunctionAppSlot#pre_warmed_instance_count}.

---

##### `runtime_scale_monitoring_enabled`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.runtimeScaleMonitoringEnabled"></a>

```python
runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#runtime_scale_monitoring_enabled FunctionAppSlot#runtime_scale_monitoring_enabled}.

---

##### `scm_ip_restriction`<sup>Optional</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmIpRestriction"></a>

```python
scm_ip_restriction: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#scm_ip_restriction FunctionAppSlot#scm_ip_restriction}.

---

##### `scm_type`<sup>Optional</sup> <a name="scm_type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#scm_type FunctionAppSlot#scm_type}.

---

##### `scm_use_main_ip_restriction`<sup>Optional</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#scm_use_main_ip_restriction FunctionAppSlot#scm_use_main_ip_restriction}.

---

##### `use32_bit_worker_process`<sup>Optional</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.use32BitWorkerProcess"></a>

```python
use32_bit_worker_process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#use_32_bit_worker_process FunctionAppSlot#use_32_bit_worker_process}.

---

##### `vnet_route_all_enabled`<sup>Optional</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#vnet_route_all_enabled FunctionAppSlot#vnet_route_all_enabled}.

---

##### `websockets_enabled`<sup>Optional</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#websockets_enabled FunctionAppSlot#websockets_enabled}.

---

### FunctionAppSlotSiteConfigCors <a name="FunctionAppSlotSiteConfigCors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigCors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#allowed_origins FunctionAppSlot#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#support_credentials FunctionAppSlot#support_credentials}. |

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#allowed_origins FunctionAppSlot#allowed_origins}.

---

##### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#support_credentials FunctionAppSlot#support_credentials}.

---

### FunctionAppSlotSiteConfigIpRestriction <a name="FunctionAppSlotSiteConfigIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigIpRestrictionHeaders]] = None,
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
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#action FunctionAppSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#action FunctionAppSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}.

---

### FunctionAppSlotSiteConfigIpRestrictionHeaders <a name="FunctionAppSlotSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}.

---

### FunctionAppSlotSiteConfigScmIpRestriction <a name="FunctionAppSlotSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction(
  action: str = None,
  headers: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigScmIpRestrictionHeaders]] = None,
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
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#action FunctionAppSlot#action}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.headers">headers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#name FunctionAppSlot#name}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.serviceTag">service_tag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#action FunctionAppSlot#action}.

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.headers"></a>

```python
headers: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#headers FunctionAppSlot#headers}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#ip_address FunctionAppSlot#ip_address}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#name FunctionAppSlot#name}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#priority FunctionAppSlot#priority}.

---

##### `service_tag`<sup>Optional</sup> <a name="service_tag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#service_tag FunctionAppSlot#service_tag}.

---

##### `virtual_network_subnet_id`<sup>Optional</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#virtual_network_subnet_id FunctionAppSlot#virtual_network_subnet_id}.

---

### FunctionAppSlotSiteConfigScmIpRestrictionHeaders <a name="FunctionAppSlotSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders(
  x_azure_fdid: typing.List[str] = None,
  x_fd_health_probe: typing.List[str] = None,
  x_forwarded_for: typing.List[str] = None,
  x_forwarded_host: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}. |

---

##### `x_azure_fdid`<sup>Optional</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_azure_fdid FunctionAppSlot#x_azure_fdid}.

---

##### `x_fd_health_probe`<sup>Optional</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_fd_health_probe FunctionAppSlot#x_fd_health_probe}.

---

##### `x_forwarded_for`<sup>Optional</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_forwarded_for FunctionAppSlot#x_forwarded_for}.

---

##### `x_forwarded_host`<sup>Optional</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#x_forwarded_host FunctionAppSlot#x_forwarded_host}.

---

### FunctionAppSlotSiteCredential <a name="FunctionAppSlotSiteCredential" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteCredential()
```


### FunctionAppSlotTimeouts <a name="FunctionAppSlotTimeouts" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#create FunctionAppSlot#create}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#delete FunctionAppSlot#delete}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#read FunctionAppSlot#read}. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#update FunctionAppSlot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#create FunctionAppSlot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#delete FunctionAppSlot#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#read FunctionAppSlot#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#update FunctionAppSlot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FunctionAppSlotAuthSettingsActiveDirectoryOutputReference <a name="FunctionAppSlotAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences">reset_allowed_audiences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret">reset_client_secret</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_audiences` <a name="reset_allowed_audiences" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetAllowedAudiences"></a>

```python
def reset_allowed_audiences() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput">allowed_audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">allowed_audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_audiences_input`<sup>Optional</sup> <a name="allowed_audiences_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiencesInput"></a>

```python
allowed_audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `allowed_audiences`<sup>Required</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```python
allowed_audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSlotAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

---


### FunctionAppSlotAuthSettingsFacebookOutputReference <a name="FunctionAppSlotAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appIdInput">app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretInput">app_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appId">app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecret">app_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_id_input`<sup>Optional</sup> <a name="app_id_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appIdInput"></a>

```python
app_id_input: str
```

- *Type:* str

---

##### `app_secret_input`<sup>Optional</sup> <a name="app_secret_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecretInput"></a>

```python
app_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appId"></a>

```python
app_id: str
```

- *Type:* str

---

##### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.appSecret"></a>

```python
app_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSlotAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

---


### FunctionAppSlotAuthSettingsGoogleOutputReference <a name="FunctionAppSlotAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSlotAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

---


### FunctionAppSlotAuthSettingsMicrosoftOutputReference <a name="FunctionAppSlotAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes">reset_oauth_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_oauth_scopes` <a name="reset_oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.resetOauthScopes"></a>

```python
def reset_oauth_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput">oauth_scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes">oauth_scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `oauth_scopes_input`<sup>Optional</sup> <a name="oauth_scopes_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopesInput"></a>

```python
oauth_scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `oauth_scopes`<sup>Required</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```python
oauth_scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSlotAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

---


### FunctionAppSlotAuthSettingsOutputReference <a name="FunctionAppSlotAuthSettingsOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putActiveDirectory">put_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putFacebook">put_facebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putGoogle">put_google</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putMicrosoft">put_microsoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putTwitter">put_twitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetActiveDirectory">reset_active_directory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAdditionalLoginParams">reset_additional_login_params</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls">reset_allowed_external_redirect_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetDefaultProvider">reset_default_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetFacebook">reset_facebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetGoogle">reset_google</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetIssuer">reset_issuer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetMicrosoft">reset_microsoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetRuntimeVersion">reset_runtime_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours">reset_token_refresh_extension_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenStoreEnabled">reset_token_store_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTwitter">reset_twitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction">reset_unauthenticated_client_action</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_active_directory` <a name="put_active_directory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putActiveDirectory"></a>

```python
def put_active_directory(
  client_id: str,
  allowed_audiences: typing.List[str] = None,
  client_secret: str = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putActiveDirectory.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

###### `allowed_audiences`<sup>Optional</sup> <a name="allowed_audiences" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putActiveDirectory.parameter.allowedAudiences"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#allowed_audiences FunctionAppSlot#allowed_audiences}.

---

###### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putActiveDirectory.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

##### `put_facebook` <a name="put_facebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putFacebook"></a>

```python
def put_facebook(
  app_id: str,
  app_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `app_id`<sup>Required</sup> <a name="app_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putFacebook.parameter.appId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_id FunctionAppSlot#app_id}.

---

###### `app_secret`<sup>Required</sup> <a name="app_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putFacebook.parameter.appSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#app_secret FunctionAppSlot#app_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putFacebook.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

##### `put_google` <a name="put_google" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putGoogle"></a>

```python
def put_google(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putGoogle.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putGoogle.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putGoogle.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

##### `put_microsoft` <a name="put_microsoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putMicrosoft"></a>

```python
def put_microsoft(
  client_id: str,
  client_secret: str,
  oauth_scopes: typing.List[str] = None
) -> None
```

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putMicrosoft.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_id FunctionAppSlot#client_id}.

---

###### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putMicrosoft.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#client_secret FunctionAppSlot#client_secret}.

---

###### `oauth_scopes`<sup>Optional</sup> <a name="oauth_scopes" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putMicrosoft.parameter.oauthScopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#oauth_scopes FunctionAppSlot#oauth_scopes}.

---

##### `put_twitter` <a name="put_twitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putTwitter"></a>

```python
def put_twitter(
  consumer_key: str,
  consumer_secret: str
) -> None
```

###### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putTwitter.parameter.consumerKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#consumer_key FunctionAppSlot#consumer_key}.

---

###### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.putTwitter.parameter.consumerSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#consumer_secret FunctionAppSlot#consumer_secret}.

---

##### `reset_active_directory` <a name="reset_active_directory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetActiveDirectory"></a>

```python
def reset_active_directory() -> None
```

##### `reset_additional_login_params` <a name="reset_additional_login_params" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAdditionalLoginParams"></a>

```python
def reset_additional_login_params() -> None
```

##### `reset_allowed_external_redirect_urls` <a name="reset_allowed_external_redirect_urls" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetAllowedExternalRedirectUrls"></a>

```python
def reset_allowed_external_redirect_urls() -> None
```

##### `reset_default_provider` <a name="reset_default_provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetDefaultProvider"></a>

```python
def reset_default_provider() -> None
```

##### `reset_facebook` <a name="reset_facebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetFacebook"></a>

```python
def reset_facebook() -> None
```

##### `reset_google` <a name="reset_google" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetGoogle"></a>

```python
def reset_google() -> None
```

##### `reset_issuer` <a name="reset_issuer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetIssuer"></a>

```python
def reset_issuer() -> None
```

##### `reset_microsoft` <a name="reset_microsoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetMicrosoft"></a>

```python
def reset_microsoft() -> None
```

##### `reset_runtime_version` <a name="reset_runtime_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetRuntimeVersion"></a>

```python
def reset_runtime_version() -> None
```

##### `reset_token_refresh_extension_hours` <a name="reset_token_refresh_extension_hours" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenRefreshExtensionHours"></a>

```python
def reset_token_refresh_extension_hours() -> None
```

##### `reset_token_store_enabled` <a name="reset_token_store_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTokenStoreEnabled"></a>

```python
def reset_token_store_enabled() -> None
```

##### `reset_twitter` <a name="reset_twitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetTwitter"></a>

```python
def reset_twitter() -> None
```

##### `reset_unauthenticated_client_action` <a name="reset_unauthenticated_client_action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.resetUnauthenticatedClientAction"></a>

```python
def reset_unauthenticated_client_action() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectory">active_directory</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference">FunctionAppSlotAuthSettingsActiveDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebook">facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference">FunctionAppSlotAuthSettingsFacebookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.google">google</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference">FunctionAppSlotAuthSettingsGoogleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoft">microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference">FunctionAppSlotAuthSettingsMicrosoftOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitter">twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference">FunctionAppSlotAuthSettingsTwitterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectoryInput">active_directory_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParamsInput">additional_login_params_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput">allowed_external_redirect_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProviderInput">default_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebookInput">facebook_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.googleInput">google_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuerInput">issuer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoftInput">microsoft_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersionInput">runtime_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput">token_refresh_extension_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput">token_store_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitterInput">twitter_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput">unauthenticated_client_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParams">additional_login_params</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls">allowed_external_redirect_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProvider">default_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersion">runtime_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours">token_refresh_extension_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabled">token_store_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientAction">unauthenticated_client_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_directory`<sup>Required</sup> <a name="active_directory" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectory"></a>

```python
active_directory: FunctionAppSlotAuthSettingsActiveDirectoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectoryOutputReference">FunctionAppSlotAuthSettingsActiveDirectoryOutputReference</a>

---

##### `facebook`<sup>Required</sup> <a name="facebook" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebook"></a>

```python
facebook: FunctionAppSlotAuthSettingsFacebookOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebookOutputReference">FunctionAppSlotAuthSettingsFacebookOutputReference</a>

---

##### `google`<sup>Required</sup> <a name="google" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.google"></a>

```python
google: FunctionAppSlotAuthSettingsGoogleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogleOutputReference">FunctionAppSlotAuthSettingsGoogleOutputReference</a>

---

##### `microsoft`<sup>Required</sup> <a name="microsoft" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoft"></a>

```python
microsoft: FunctionAppSlotAuthSettingsMicrosoftOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoftOutputReference">FunctionAppSlotAuthSettingsMicrosoftOutputReference</a>

---

##### `twitter`<sup>Required</sup> <a name="twitter" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitter"></a>

```python
twitter: FunctionAppSlotAuthSettingsTwitterOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference">FunctionAppSlotAuthSettingsTwitterOutputReference</a>

---

##### `active_directory_input`<sup>Optional</sup> <a name="active_directory_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.activeDirectoryInput"></a>

```python
active_directory_input: FunctionAppSlotAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsActiveDirectory">FunctionAppSlotAuthSettingsActiveDirectory</a>

---

##### `additional_login_params_input`<sup>Optional</sup> <a name="additional_login_params_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParamsInput"></a>

```python
additional_login_params_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_external_redirect_urls_input`<sup>Optional</sup> <a name="allowed_external_redirect_urls_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrlsInput"></a>

```python
allowed_external_redirect_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_provider_input`<sup>Optional</sup> <a name="default_provider_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProviderInput"></a>

```python
default_provider_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `facebook_input`<sup>Optional</sup> <a name="facebook_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.facebookInput"></a>

```python
facebook_input: FunctionAppSlotAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsFacebook">FunctionAppSlotAuthSettingsFacebook</a>

---

##### `google_input`<sup>Optional</sup> <a name="google_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.googleInput"></a>

```python
google_input: FunctionAppSlotAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsGoogle">FunctionAppSlotAuthSettingsGoogle</a>

---

##### `issuer_input`<sup>Optional</sup> <a name="issuer_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuerInput"></a>

```python
issuer_input: str
```

- *Type:* str

---

##### `microsoft_input`<sup>Optional</sup> <a name="microsoft_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.microsoftInput"></a>

```python
microsoft_input: FunctionAppSlotAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsMicrosoft">FunctionAppSlotAuthSettingsMicrosoft</a>

---

##### `runtime_version_input`<sup>Optional</sup> <a name="runtime_version_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersionInput"></a>

```python
runtime_version_input: str
```

- *Type:* str

---

##### `token_refresh_extension_hours_input`<sup>Optional</sup> <a name="token_refresh_extension_hours_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHoursInput"></a>

```python
token_refresh_extension_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_store_enabled_input`<sup>Optional</sup> <a name="token_store_enabled_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabledInput"></a>

```python
token_store_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `twitter_input`<sup>Optional</sup> <a name="twitter_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.twitterInput"></a>

```python
twitter_input: FunctionAppSlotAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

---

##### `unauthenticated_client_action_input`<sup>Optional</sup> <a name="unauthenticated_client_action_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientActionInput"></a>

```python
unauthenticated_client_action_input: str
```

- *Type:* str

---

##### `additional_login_params`<sup>Required</sup> <a name="additional_login_params" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.additionalLoginParams"></a>

```python
additional_login_params: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `allowed_external_redirect_urls`<sup>Required</sup> <a name="allowed_external_redirect_urls" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```python
allowed_external_redirect_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_provider`<sup>Required</sup> <a name="default_provider" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.defaultProvider"></a>

```python
default_provider: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `runtime_version`<sup>Required</sup> <a name="runtime_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.runtimeVersion"></a>

```python
runtime_version: str
```

- *Type:* str

---

##### `token_refresh_extension_hours`<sup>Required</sup> <a name="token_refresh_extension_hours" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```python
token_refresh_extension_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_store_enabled`<sup>Required</sup> <a name="token_store_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```python
token_store_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unauthenticated_client_action`<sup>Required</sup> <a name="unauthenticated_client_action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```python
unauthenticated_client_action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSlotAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettings">FunctionAppSlotAuthSettings</a>

---


### FunctionAppSlotAuthSettingsTwitterOutputReference <a name="FunctionAppSlotAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput">consumer_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput">consumer_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKey">consumer_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecret">consumer_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `consumer_key_input`<sup>Optional</sup> <a name="consumer_key_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKeyInput"></a>

```python
consumer_key_input: str
```

- *Type:* str

---

##### `consumer_secret_input`<sup>Optional</sup> <a name="consumer_secret_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecretInput"></a>

```python
consumer_secret_input: str
```

- *Type:* str

---

##### `consumer_key`<sup>Required</sup> <a name="consumer_key" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```python
consumer_key: str
```

- *Type:* str

---

##### `consumer_secret`<sup>Required</sup> <a name="consumer_secret" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```python
consumer_secret: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitterOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSlotAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotAuthSettingsTwitter">FunctionAppSlotAuthSettingsTwitter</a>

---


### FunctionAppSlotConnectionStringList <a name="FunctionAppSlotConnectionStringList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotConnectionStringList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppSlotConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FunctionAppSlotConnectionString]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>]]

---


### FunctionAppSlotConnectionStringOutputReference <a name="FunctionAppSlotConnectionStringOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppSlotConnectionString]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotConnectionString">FunctionAppSlotConnectionString</a>]

---


### FunctionAppSlotIdentityOutputReference <a name="FunctionAppSlotIdentityOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentityOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSlotIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotIdentity">FunctionAppSlotIdentity</a>

---


### FunctionAppSlotSiteConfigCorsOutputReference <a name="FunctionAppSlotSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resetSupportCredentials">reset_support_credentials</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_support_credentials` <a name="reset_support_credentials" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.resetSupportCredentials"></a>

```python
def reset_support_credentials() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentialsInput">support_credentials_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentials">support_credentials</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials_input`<sup>Optional</sup> <a name="support_credentials_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentialsInput"></a>

```python
support_credentials_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `support_credentials`<sup>Required</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.supportCredentials"></a>

```python
support_credentials: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSlotSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

---


### FunctionAppSlotSiteConfigIpRestrictionHeadersList <a name="FunctionAppSlotSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>]]

---


### FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference <a name="FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppSlotSiteConfigIpRestrictionHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>]

---


### FunctionAppSlotSiteConfigIpRestrictionList <a name="FunctionAppSlotSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppSlotSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>]]

---


### FunctionAppSlotSiteConfigIpRestrictionOutputReference <a name="FunctionAppSlotSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList">FunctionAppSlotSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headers"></a>

```python
headers: FunctionAppSlotSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeadersList">FunctionAppSlotSiteConfigIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionHeaders">FunctionAppSlotSiteConfigIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppSlotSiteConfigIpRestriction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>]

---


### FunctionAppSlotSiteConfigOutputReference <a name="FunctionAppSlotSiteConfigOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putCors">put_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putIpRestriction">put_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putScmIpRestriction">put_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAlwaysOn">reset_always_on</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAppScaleLimit">reset_app_scale_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAutoSwapSlotName">reset_auto_swap_slot_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetCors">reset_cors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetDotnetFrameworkVersion">reset_dotnet_framework_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetElasticInstanceMinimum">reset_elastic_instance_minimum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetFtpsState">reset_ftps_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHealthCheckPath">reset_health_check_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHttp2Enabled">reset_http2_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetIpRestriction">reset_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetJavaVersion">reset_java_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetLinuxFxVersion">reset_linux_fx_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetMinTlsVersion">reset_min_tls_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetPreWarmedInstanceCount">reset_pre_warmed_instance_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled">reset_runtime_scale_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmIpRestriction">reset_scm_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmType">reset_scm_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmUseMainIpRestriction">reset_scm_use_main_ip_restriction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetUse32BitWorkerProcess">reset_use32_bit_worker_process</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetVnetRouteAllEnabled">reset_vnet_route_all_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetWebsocketsEnabled">reset_websockets_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cors` <a name="put_cors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putCors"></a>

```python
def put_cors(
  allowed_origins: typing.List[str],
  support_credentials: typing.Union[bool, IResolvable] = None
) -> None
```

###### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putCors.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#allowed_origins FunctionAppSlot#allowed_origins}.

---

###### `support_credentials`<sup>Optional</sup> <a name="support_credentials" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putCors.parameter.supportCredentials"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/resources/function_app_slot#support_credentials FunctionAppSlot#support_credentials}.

---

##### `put_ip_restriction` <a name="put_ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putIpRestriction"></a>

```python
def put_ip_restriction(
  value: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>]]

---

##### `put_scm_ip_restriction` <a name="put_scm_ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putScmIpRestriction"></a>

```python
def put_scm_ip_restriction(
  value: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigScmIpRestriction]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.putScmIpRestriction.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>]]

---

##### `reset_always_on` <a name="reset_always_on" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAlwaysOn"></a>

```python
def reset_always_on() -> None
```

##### `reset_app_scale_limit` <a name="reset_app_scale_limit" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAppScaleLimit"></a>

```python
def reset_app_scale_limit() -> None
```

##### `reset_auto_swap_slot_name` <a name="reset_auto_swap_slot_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetAutoSwapSlotName"></a>

```python
def reset_auto_swap_slot_name() -> None
```

##### `reset_cors` <a name="reset_cors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetCors"></a>

```python
def reset_cors() -> None
```

##### `reset_dotnet_framework_version` <a name="reset_dotnet_framework_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetDotnetFrameworkVersion"></a>

```python
def reset_dotnet_framework_version() -> None
```

##### `reset_elastic_instance_minimum` <a name="reset_elastic_instance_minimum" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetElasticInstanceMinimum"></a>

```python
def reset_elastic_instance_minimum() -> None
```

##### `reset_ftps_state` <a name="reset_ftps_state" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetFtpsState"></a>

```python
def reset_ftps_state() -> None
```

##### `reset_health_check_path` <a name="reset_health_check_path" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHealthCheckPath"></a>

```python
def reset_health_check_path() -> None
```

##### `reset_http2_enabled` <a name="reset_http2_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetHttp2Enabled"></a>

```python
def reset_http2_enabled() -> None
```

##### `reset_ip_restriction` <a name="reset_ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetIpRestriction"></a>

```python
def reset_ip_restriction() -> None
```

##### `reset_java_version` <a name="reset_java_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetJavaVersion"></a>

```python
def reset_java_version() -> None
```

##### `reset_linux_fx_version` <a name="reset_linux_fx_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetLinuxFxVersion"></a>

```python
def reset_linux_fx_version() -> None
```

##### `reset_min_tls_version` <a name="reset_min_tls_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetMinTlsVersion"></a>

```python
def reset_min_tls_version() -> None
```

##### `reset_pre_warmed_instance_count` <a name="reset_pre_warmed_instance_count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetPreWarmedInstanceCount"></a>

```python
def reset_pre_warmed_instance_count() -> None
```

##### `reset_runtime_scale_monitoring_enabled` <a name="reset_runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetRuntimeScaleMonitoringEnabled"></a>

```python
def reset_runtime_scale_monitoring_enabled() -> None
```

##### `reset_scm_ip_restriction` <a name="reset_scm_ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmIpRestriction"></a>

```python
def reset_scm_ip_restriction() -> None
```

##### `reset_scm_type` <a name="reset_scm_type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmType"></a>

```python
def reset_scm_type() -> None
```

##### `reset_scm_use_main_ip_restriction` <a name="reset_scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetScmUseMainIpRestriction"></a>

```python
def reset_scm_use_main_ip_restriction() -> None
```

##### `reset_use32_bit_worker_process` <a name="reset_use32_bit_worker_process" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetUse32BitWorkerProcess"></a>

```python
def reset_use32_bit_worker_process() -> None
```

##### `reset_vnet_route_all_enabled` <a name="reset_vnet_route_all_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetVnetRouteAllEnabled"></a>

```python
def reset_vnet_route_all_enabled() -> None
```

##### `reset_websockets_enabled` <a name="reset_websockets_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.resetWebsocketsEnabled"></a>

```python
def reset_websockets_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference">FunctionAppSlotSiteConfigCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestriction">ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList">FunctionAppSlotSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestriction">scm_ip_restriction</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList">FunctionAppSlotSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOnInput">always_on_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimitInput">app_scale_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotNameInput">auto_swap_slot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.corsInput">cors_input</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput">dotnet_framework_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimumInput">elastic_instance_minimum_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsStateInput">ftps_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPathInput">health_check_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2EnabledInput">http2_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestrictionInput">ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersionInput">java_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersionInput">linux_fx_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersionInput">min_tls_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCountInput">pre_warmed_instance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput">runtime_scale_monitoring_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestrictionInput">scm_ip_restriction_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmTypeInput">scm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput">scm_use_main_ip_restriction_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput">use32_bit_worker_process_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput">vnet_route_all_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabledInput">websockets_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOn">always_on</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimit">app_scale_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotName">auto_swap_slot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnet_framework_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimum">elastic_instance_minimum</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsState">ftps_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2Enabled">http2_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersion">java_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersion">linux_fx_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersion">min_tls_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCount">pre_warmed_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">runtime_scale_monitoring_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmType">scm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestriction">scm_use_main_ip_restriction</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcess">use32_bit_worker_process</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabled">vnet_route_all_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabled">websockets_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.cors"></a>

```python
cors: FunctionAppSlotSiteConfigCorsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCorsOutputReference">FunctionAppSlotSiteConfigCorsOutputReference</a>

---

##### `ip_restriction`<sup>Required</sup> <a name="ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestriction"></a>

```python
ip_restriction: FunctionAppSlotSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestrictionList">FunctionAppSlotSiteConfigIpRestrictionList</a>

---

##### `scm_ip_restriction`<sup>Required</sup> <a name="scm_ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestriction"></a>

```python
scm_ip_restriction: FunctionAppSlotSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList">FunctionAppSlotSiteConfigScmIpRestrictionList</a>

---

##### `always_on_input`<sup>Optional</sup> <a name="always_on_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOnInput"></a>

```python
always_on_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_scale_limit_input`<sup>Optional</sup> <a name="app_scale_limit_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimitInput"></a>

```python
app_scale_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_swap_slot_name_input`<sup>Optional</sup> <a name="auto_swap_slot_name_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotNameInput"></a>

```python
auto_swap_slot_name_input: str
```

- *Type:* str

---

##### `cors_input`<sup>Optional</sup> <a name="cors_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.corsInput"></a>

```python
cors_input: FunctionAppSlotSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigCors">FunctionAppSlotSiteConfigCors</a>

---

##### `dotnet_framework_version_input`<sup>Optional</sup> <a name="dotnet_framework_version_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersionInput"></a>

```python
dotnet_framework_version_input: str
```

- *Type:* str

---

##### `elastic_instance_minimum_input`<sup>Optional</sup> <a name="elastic_instance_minimum_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimumInput"></a>

```python
elastic_instance_minimum_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftps_state_input`<sup>Optional</sup> <a name="ftps_state_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsStateInput"></a>

```python
ftps_state_input: str
```

- *Type:* str

---

##### `health_check_path_input`<sup>Optional</sup> <a name="health_check_path_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPathInput"></a>

```python
health_check_path_input: str
```

- *Type:* str

---

##### `http2_enabled_input`<sup>Optional</sup> <a name="http2_enabled_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2EnabledInput"></a>

```python
http2_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_restriction_input`<sup>Optional</sup> <a name="ip_restriction_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ipRestrictionInput"></a>

```python
ip_restriction_input: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigIpRestriction">FunctionAppSlotSiteConfigIpRestriction</a>]]

---

##### `java_version_input`<sup>Optional</sup> <a name="java_version_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersionInput"></a>

```python
java_version_input: str
```

- *Type:* str

---

##### `linux_fx_version_input`<sup>Optional</sup> <a name="linux_fx_version_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersionInput"></a>

```python
linux_fx_version_input: str
```

- *Type:* str

---

##### `min_tls_version_input`<sup>Optional</sup> <a name="min_tls_version_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersionInput"></a>

```python
min_tls_version_input: str
```

- *Type:* str

---

##### `pre_warmed_instance_count_input`<sup>Optional</sup> <a name="pre_warmed_instance_count_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCountInput"></a>

```python
pre_warmed_instance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runtime_scale_monitoring_enabled_input`<sup>Optional</sup> <a name="runtime_scale_monitoring_enabled_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabledInput"></a>

```python
runtime_scale_monitoring_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scm_ip_restriction_input`<sup>Optional</sup> <a name="scm_ip_restriction_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmIpRestrictionInput"></a>

```python
scm_ip_restriction_input: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>]]

---

##### `scm_type_input`<sup>Optional</sup> <a name="scm_type_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmTypeInput"></a>

```python
scm_type_input: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction_input`<sup>Optional</sup> <a name="scm_use_main_ip_restriction_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestrictionInput"></a>

```python
scm_use_main_ip_restriction_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker_process_input`<sup>Optional</sup> <a name="use32_bit_worker_process_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcessInput"></a>

```python
use32_bit_worker_process_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled_input`<sup>Optional</sup> <a name="vnet_route_all_enabled_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabledInput"></a>

```python
vnet_route_all_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled_input`<sup>Optional</sup> <a name="websockets_enabled_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabledInput"></a>

```python
websockets_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `always_on`<sup>Required</sup> <a name="always_on" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.alwaysOn"></a>

```python
always_on: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `app_scale_limit`<sup>Required</sup> <a name="app_scale_limit" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.appScaleLimit"></a>

```python
app_scale_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `auto_swap_slot_name`<sup>Required</sup> <a name="auto_swap_slot_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.autoSwapSlotName"></a>

```python
auto_swap_slot_name: str
```

- *Type:* str

---

##### `dotnet_framework_version`<sup>Required</sup> <a name="dotnet_framework_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```python
dotnet_framework_version: str
```

- *Type:* str

---

##### `elastic_instance_minimum`<sup>Required</sup> <a name="elastic_instance_minimum" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```python
elastic_instance_minimum: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ftps_state`<sup>Required</sup> <a name="ftps_state" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.ftpsState"></a>

```python
ftps_state: str
```

- *Type:* str

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `http2_enabled`<sup>Required</sup> <a name="http2_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.http2Enabled"></a>

```python
http2_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `java_version`<sup>Required</sup> <a name="java_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.javaVersion"></a>

```python
java_version: str
```

- *Type:* str

---

##### `linux_fx_version`<sup>Required</sup> <a name="linux_fx_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.linuxFxVersion"></a>

```python
linux_fx_version: str
```

- *Type:* str

---

##### `min_tls_version`<sup>Required</sup> <a name="min_tls_version" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.minTlsVersion"></a>

```python
min_tls_version: str
```

- *Type:* str

---

##### `pre_warmed_instance_count`<sup>Required</sup> <a name="pre_warmed_instance_count" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```python
pre_warmed_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `runtime_scale_monitoring_enabled`<sup>Required</sup> <a name="runtime_scale_monitoring_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```python
runtime_scale_monitoring_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `scm_type`<sup>Required</sup> <a name="scm_type" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmType"></a>

```python
scm_type: str
```

- *Type:* str

---

##### `scm_use_main_ip_restriction`<sup>Required</sup> <a name="scm_use_main_ip_restriction" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```python
scm_use_main_ip_restriction: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `use32_bit_worker_process`<sup>Required</sup> <a name="use32_bit_worker_process" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```python
use32_bit_worker_process: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnet_route_all_enabled`<sup>Required</sup> <a name="vnet_route_all_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```python
vnet_route_all_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `websockets_enabled`<sup>Required</sup> <a name="websockets_enabled" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.websocketsEnabled"></a>

```python
websockets_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSlotSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfig">FunctionAppSlotSiteConfig</a>

---


### FunctionAppSlotSiteConfigScmIpRestrictionHeadersList <a name="FunctionAppSlotSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>]]

---


### FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference <a name="FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid">reset_x_azure_fdid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe">reset_x_fd_health_probe</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor">reset_x_forwarded_for</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost">reset_x_forwarded_host</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_x_azure_fdid` <a name="reset_x_azure_fdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXAzureFdid"></a>

```python
def reset_x_azure_fdid() -> None
```

##### `reset_x_fd_health_probe` <a name="reset_x_fd_health_probe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXFdHealthProbe"></a>

```python
def reset_x_fd_health_probe() -> None
```

##### `reset_x_forwarded_for` <a name="reset_x_forwarded_for" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedFor"></a>

```python
def reset_x_forwarded_for() -> None
```

##### `reset_x_forwarded_host` <a name="reset_x_forwarded_host" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.resetXForwardedHost"></a>

```python
def reset_x_forwarded_host() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput">x_azure_fdid_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput">x_fd_health_probe_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput">x_forwarded_for_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput">x_forwarded_host_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">x_azure_fdid</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">x_fd_health_probe</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">x_forwarded_for</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">x_forwarded_host</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `x_azure_fdid_input`<sup>Optional</sup> <a name="x_azure_fdid_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdidInput"></a>

```python
x_azure_fdid_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe_input`<sup>Optional</sup> <a name="x_fd_health_probe_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbeInput"></a>

```python
x_fd_health_probe_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for_input`<sup>Optional</sup> <a name="x_forwarded_for_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedForInput"></a>

```python
x_forwarded_for_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host_input`<sup>Optional</sup> <a name="x_forwarded_host_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHostInput"></a>

```python
x_forwarded_host_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_azure_fdid`<sup>Required</sup> <a name="x_azure_fdid" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```python
x_azure_fdid: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_fd_health_probe`<sup>Required</sup> <a name="x_fd_health_probe" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```python
x_fd_health_probe: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_for`<sup>Required</sup> <a name="x_forwarded_for" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```python
x_forwarded_for: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `x_forwarded_host`<sup>Required</sup> <a name="x_forwarded_host" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```python
x_forwarded_host: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppSlotSiteConfigScmIpRestrictionHeaders]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>]

---


### FunctionAppSlotSiteConfigScmIpRestrictionList <a name="FunctionAppSlotSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppSlotSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigScmIpRestriction]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>]]

---


### FunctionAppSlotSiteConfigScmIpRestrictionOutputReference <a name="FunctionAppSlotSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders">put_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders">reset_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag">reset_service_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId">reset_virtual_network_subnet_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_headers` <a name="put_headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders"></a>

```python
def put_headers(
  value: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigScmIpRestrictionHeaders]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.putHeaders.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `reset_action` <a name="reset_action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_headers` <a name="reset_headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetHeaders"></a>

```python
def reset_headers() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_service_tag` <a name="reset_service_tag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetServiceTag"></a>

```python
def reset_service_tag() -> None
```

##### `reset_virtual_network_subnet_id` <a name="reset_virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.resetVirtualNetworkSubnetId"></a>

```python
def reset_virtual_network_subnet_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList">FunctionAppSlotSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput">service_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput">virtual_network_subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag">service_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtual_network_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```python
headers: FunctionAppSlotSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeadersList">FunctionAppSlotSiteConfigScmIpRestrictionHeadersList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.headersInput"></a>

```python
headers_input: typing.Union[IResolvable, typing.List[FunctionAppSlotSiteConfigScmIpRestrictionHeaders]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionHeaders">FunctionAppSlotSiteConfigScmIpRestrictionHeaders</a>]]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag_input`<sup>Optional</sup> <a name="service_tag_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTagInput"></a>

```python
service_tag_input: str
```

- *Type:* str

---

##### `virtual_network_subnet_id_input`<sup>Optional</sup> <a name="virtual_network_subnet_id_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetIdInput"></a>

```python
virtual_network_subnet_id_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `service_tag`<sup>Required</sup> <a name="service_tag" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```python
service_tag: str
```

- *Type:* str

---

##### `virtual_network_subnet_id`<sup>Required</sup> <a name="virtual_network_subnet_id" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```python
virtual_network_subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppSlotSiteConfigScmIpRestriction]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteConfigScmIpRestriction">FunctionAppSlotSiteConfigScmIpRestriction</a>]

---


### FunctionAppSlotSiteCredentialList <a name="FunctionAppSlotSiteCredentialList" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FunctionAppSlotSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### FunctionAppSlotSiteCredentialOutputReference <a name="FunctionAppSlotSiteCredentialOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotSiteCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential">FunctionAppSlotSiteCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredentialOutputReference.property.internalValue"></a>

```python
internal_value: FunctionAppSlotSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotSiteCredential">FunctionAppSlotSiteCredential</a>

---


### FunctionAppSlotTimeoutsOutputReference <a name="FunctionAppSlotTimeoutsOutputReference" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import function_app_slot

functionAppSlot.FunctionAppSlotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FunctionAppSlotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.functionAppSlot.FunctionAppSlotTimeouts">FunctionAppSlotTimeouts</a>]

---



