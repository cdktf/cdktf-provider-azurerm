# `staticWebApp` Submodule <a name="`staticWebApp` Submodule" id="@cdktf/provider-azurerm.staticWebApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StaticWebApp <a name="StaticWebApp" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app azurerm_static_web_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebApp(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  app_settings: typing.Mapping[str] = None,
  basic_auth: StaticWebAppBasicAuth = None,
  configuration_file_changes_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: StaticWebAppIdentity = None,
  preview_environments_enabled: typing.Union[bool, IResolvable] = None,
  sku_size: str = None,
  sku_tier: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StaticWebAppTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#location StaticWebApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#name StaticWebApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#resource_group_name StaticWebApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#app_settings StaticWebApp#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth">StaticWebAppBasicAuth</a></code> | basic_auth block. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.configurationFileChangesEnabled">configuration_file_changes_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#configuration_file_changes_enabled StaticWebApp#configuration_file_changes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#id StaticWebApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity">StaticWebAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.previewEnvironmentsEnabled">preview_environments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#preview_environments_enabled StaticWebApp#preview_environments_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.skuSize">sku_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#sku_size StaticWebApp#sku_size}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.skuTier">sku_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#sku_tier StaticWebApp#sku_tier}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#tags StaticWebApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts">StaticWebAppTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#location StaticWebApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#name StaticWebApp#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#resource_group_name StaticWebApp#resource_group_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.appSettings"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#app_settings StaticWebApp#app_settings}.

---

##### `basic_auth`<sup>Optional</sup> <a name="basic_auth" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.basicAuth"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth">StaticWebAppBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#basic_auth StaticWebApp#basic_auth}

---

##### `configuration_file_changes_enabled`<sup>Optional</sup> <a name="configuration_file_changes_enabled" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.configurationFileChangesEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#configuration_file_changes_enabled StaticWebApp#configuration_file_changes_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#id StaticWebApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.identity"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity">StaticWebAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#identity StaticWebApp#identity}

---

##### `preview_environments_enabled`<sup>Optional</sup> <a name="preview_environments_enabled" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.previewEnvironmentsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#preview_environments_enabled StaticWebApp#preview_environments_enabled}.

---

##### `sku_size`<sup>Optional</sup> <a name="sku_size" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.skuSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#sku_size StaticWebApp#sku_size}.

---

##### `sku_tier`<sup>Optional</sup> <a name="sku_tier" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.skuTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#sku_tier StaticWebApp#sku_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#tags StaticWebApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts">StaticWebAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#timeouts StaticWebApp#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putBasicAuth">put_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putIdentity">put_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetAppSettings">reset_app_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetBasicAuth">reset_basic_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetConfigurationFileChangesEnabled">reset_configuration_file_changes_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetIdentity">reset_identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetPreviewEnvironmentsEnabled">reset_preview_environments_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetSkuSize">reset_sku_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetSkuTier">reset_sku_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_basic_auth` <a name="put_basic_auth" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putBasicAuth"></a>

```python
def put_basic_auth(
  environments: str,
  password: str
) -> None
```

###### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putBasicAuth.parameter.environments"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#environments StaticWebApp#environments}.

---

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putBasicAuth.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#password StaticWebApp#password}.

---

##### `put_identity` <a name="put_identity" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putIdentity"></a>

```python
def put_identity(
  type: str,
  identity_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putIdentity.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#type StaticWebApp#type}.

---

###### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putIdentity.parameter.identityIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#identity_ids StaticWebApp#identity_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#create StaticWebApp#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#delete StaticWebApp#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#read StaticWebApp#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#update StaticWebApp#update}.

---

##### `reset_app_settings` <a name="reset_app_settings" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetAppSettings"></a>

```python
def reset_app_settings() -> None
```

##### `reset_basic_auth` <a name="reset_basic_auth" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetBasicAuth"></a>

```python
def reset_basic_auth() -> None
```

##### `reset_configuration_file_changes_enabled` <a name="reset_configuration_file_changes_enabled" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetConfigurationFileChangesEnabled"></a>

```python
def reset_configuration_file_changes_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity` <a name="reset_identity" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetIdentity"></a>

```python
def reset_identity() -> None
```

##### `reset_preview_environments_enabled` <a name="reset_preview_environments_enabled" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetPreviewEnvironmentsEnabled"></a>

```python
def reset_preview_environments_enabled() -> None
```

##### `reset_sku_size` <a name="reset_sku_size" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetSkuSize"></a>

```python
def reset_sku_size() -> None
```

##### `reset_sku_tier` <a name="reset_sku_tier" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetSkuTier"></a>

```python
def reset_sku_tier() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StaticWebApp resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebApp.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebApp.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebApp.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebApp.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StaticWebApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StaticWebApp to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StaticWebApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StaticWebApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.apiKey">api_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference">StaticWebAppBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.defaultHostName">default_host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference">StaticWebAppIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference">StaticWebAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.appSettingsInput">app_settings_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.basicAuthInput">basic_auth_input</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth">StaticWebAppBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.configurationFileChangesEnabledInput">configuration_file_changes_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.identityInput">identity_input</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity">StaticWebAppIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.previewEnvironmentsEnabledInput">preview_environments_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.skuSizeInput">sku_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.skuTierInput">sku_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts">StaticWebAppTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.configurationFileChangesEnabled">configuration_file_changes_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.previewEnvironmentsEnabled">preview_environments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.skuSize">sku_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.skuTier">sku_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_key`<sup>Required</sup> <a name="api_key" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.apiKey"></a>

```python
api_key: str
```

- *Type:* str

---

##### `basic_auth`<sup>Required</sup> <a name="basic_auth" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.basicAuth"></a>

```python
basic_auth: StaticWebAppBasicAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference">StaticWebAppBasicAuthOutputReference</a>

---

##### `default_host_name`<sup>Required</sup> <a name="default_host_name" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.defaultHostName"></a>

```python
default_host_name: str
```

- *Type:* str

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.identity"></a>

```python
identity: StaticWebAppIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference">StaticWebAppIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.timeouts"></a>

```python
timeouts: StaticWebAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference">StaticWebAppTimeoutsOutputReference</a>

---

##### `app_settings_input`<sup>Optional</sup> <a name="app_settings_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.appSettingsInput"></a>

```python
app_settings_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `basic_auth_input`<sup>Optional</sup> <a name="basic_auth_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.basicAuthInput"></a>

```python
basic_auth_input: StaticWebAppBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth">StaticWebAppBasicAuth</a>

---

##### `configuration_file_changes_enabled_input`<sup>Optional</sup> <a name="configuration_file_changes_enabled_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.configurationFileChangesEnabledInput"></a>

```python
configuration_file_changes_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `identity_input`<sup>Optional</sup> <a name="identity_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.identityInput"></a>

```python
identity_input: StaticWebAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity">StaticWebAppIdentity</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `preview_environments_enabled_input`<sup>Optional</sup> <a name="preview_environments_enabled_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.previewEnvironmentsEnabledInput"></a>

```python
preview_environments_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `sku_size_input`<sup>Optional</sup> <a name="sku_size_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.skuSizeInput"></a>

```python
sku_size_input: str
```

- *Type:* str

---

##### `sku_tier_input`<sup>Optional</sup> <a name="sku_tier_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.skuTierInput"></a>

```python
sku_tier_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StaticWebAppTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts">StaticWebAppTimeouts</a>]

---

##### `app_settings`<sup>Required</sup> <a name="app_settings" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `configuration_file_changes_enabled`<sup>Required</sup> <a name="configuration_file_changes_enabled" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.configurationFileChangesEnabled"></a>

```python
configuration_file_changes_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `preview_environments_enabled`<sup>Required</sup> <a name="preview_environments_enabled" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.previewEnvironmentsEnabled"></a>

```python
preview_environments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `sku_size`<sup>Required</sup> <a name="sku_size" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.skuSize"></a>

```python
sku_size: str
```

- *Type:* str

---

##### `sku_tier`<sup>Required</sup> <a name="sku_tier" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.skuTier"></a>

```python
sku_tier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.staticWebApp.StaticWebApp.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StaticWebAppBasicAuth <a name="StaticWebAppBasicAuth" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebAppBasicAuth(
  environments: str,
  password: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth.property.environments">environments</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#environments StaticWebApp#environments}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#password StaticWebApp#password}. |

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth.property.environments"></a>

```python
environments: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#environments StaticWebApp#environments}.

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#password StaticWebApp#password}.

---

### StaticWebAppConfig <a name="StaticWebAppConfig" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebAppConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  resource_group_name: str,
  app_settings: typing.Mapping[str] = None,
  basic_auth: StaticWebAppBasicAuth = None,
  configuration_file_changes_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  identity: StaticWebAppIdentity = None,
  preview_environments_enabled: typing.Union[bool, IResolvable] = None,
  sku_size: str = None,
  sku_tier: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: StaticWebAppTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#location StaticWebApp#location}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#name StaticWebApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#resource_group_name StaticWebApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.appSettings">app_settings</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#app_settings StaticWebApp#app_settings}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.basicAuth">basic_auth</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth">StaticWebAppBasicAuth</a></code> | basic_auth block. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.configurationFileChangesEnabled">configuration_file_changes_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#configuration_file_changes_enabled StaticWebApp#configuration_file_changes_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#id StaticWebApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity">StaticWebAppIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.previewEnvironmentsEnabled">preview_environments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#preview_environments_enabled StaticWebApp#preview_environments_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.skuSize">sku_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#sku_size StaticWebApp#sku_size}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.skuTier">sku_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#sku_tier StaticWebApp#sku_tier}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#tags StaticWebApp#tags}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts">StaticWebAppTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#location StaticWebApp#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#name StaticWebApp#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#resource_group_name StaticWebApp#resource_group_name}.

---

##### `app_settings`<sup>Optional</sup> <a name="app_settings" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.appSettings"></a>

```python
app_settings: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#app_settings StaticWebApp#app_settings}.

---

##### `basic_auth`<sup>Optional</sup> <a name="basic_auth" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.basicAuth"></a>

```python
basic_auth: StaticWebAppBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth">StaticWebAppBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#basic_auth StaticWebApp#basic_auth}

---

##### `configuration_file_changes_enabled`<sup>Optional</sup> <a name="configuration_file_changes_enabled" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.configurationFileChangesEnabled"></a>

```python
configuration_file_changes_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#configuration_file_changes_enabled StaticWebApp#configuration_file_changes_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#id StaticWebApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.identity"></a>

```python
identity: StaticWebAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity">StaticWebAppIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#identity StaticWebApp#identity}

---

##### `preview_environments_enabled`<sup>Optional</sup> <a name="preview_environments_enabled" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.previewEnvironmentsEnabled"></a>

```python
preview_environments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#preview_environments_enabled StaticWebApp#preview_environments_enabled}.

---

##### `sku_size`<sup>Optional</sup> <a name="sku_size" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.skuSize"></a>

```python
sku_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#sku_size StaticWebApp#sku_size}.

---

##### `sku_tier`<sup>Optional</sup> <a name="sku_tier" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.skuTier"></a>

```python
sku_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#sku_tier StaticWebApp#sku_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#tags StaticWebApp#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppConfig.property.timeouts"></a>

```python
timeouts: StaticWebAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts">StaticWebAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#timeouts StaticWebApp#timeouts}

---

### StaticWebAppIdentity <a name="StaticWebAppIdentity" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebAppIdentity(
  type: str,
  identity_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#type StaticWebApp#type}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#identity_ids StaticWebApp#identity_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#type StaticWebApp#type}.

---

##### `identity_ids`<sup>Optional</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#identity_ids StaticWebApp#identity_ids}.

---

### StaticWebAppTimeouts <a name="StaticWebAppTimeouts" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebAppTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#create StaticWebApp#create}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#delete StaticWebApp#delete}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#read StaticWebApp#read}. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#update StaticWebApp#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#create StaticWebApp#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#delete StaticWebApp#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#read StaticWebApp#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.102.0/docs/resources/static_web_app#update StaticWebApp#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StaticWebAppBasicAuthOutputReference <a name="StaticWebAppBasicAuthOutputReference" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebAppBasicAuthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.environmentsInput">environments_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.environments">environments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth">StaticWebAppBasicAuth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `environments_input`<sup>Optional</sup> <a name="environments_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.environmentsInput"></a>

```python
environments_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `environments`<sup>Required</sup> <a name="environments" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.environments"></a>

```python
environments: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuthOutputReference.property.internalValue"></a>

```python
internal_value: StaticWebAppBasicAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppBasicAuth">StaticWebAppBasicAuth</a>

---


### StaticWebAppIdentityOutputReference <a name="StaticWebAppIdentityOutputReference" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebAppIdentityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.resetIdentityIds">reset_identity_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_identity_ids` <a name="reset_identity_ids" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.resetIdentityIds"></a>

```python
def reset_identity_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.identityIdsInput">identity_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.identityIds">identity_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity">StaticWebAppIdentity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `identity_ids_input`<sup>Optional</sup> <a name="identity_ids_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.identityIdsInput"></a>

```python
identity_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `identity_ids`<sup>Required</sup> <a name="identity_ids" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.identityIds"></a>

```python
identity_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentityOutputReference.property.internalValue"></a>

```python
internal_value: StaticWebAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppIdentity">StaticWebAppIdentity</a>

---


### StaticWebAppTimeoutsOutputReference <a name="StaticWebAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import static_web_app

staticWebApp.StaticWebAppTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts">StaticWebAppTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StaticWebAppTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.staticWebApp.StaticWebAppTimeouts">StaticWebAppTimeouts</a>]

---



