# `apiManagementOpenidConnectProvider` Submodule <a name="`apiManagementOpenidConnectProvider` Submodule" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiManagementOpenidConnectProvider <a name="ApiManagementOpenidConnectProvider" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider azurerm_api_management_openid_connect_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_openid_connect_provider

apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  client_id: str,
  client_secret: str,
  display_name: str,
  metadata_endpoint: str,
  name: str,
  resource_group_name: str,
  description: str = None,
  id: str = None,
  timeouts: ApiManagementOpenidConnectProviderTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#api_management_name ApiManagementOpenidConnectProvider#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#client_id ApiManagementOpenidConnectProvider#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#client_secret ApiManagementOpenidConnectProvider#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#display_name ApiManagementOpenidConnectProvider#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.metadataEndpoint">metadata_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#metadata_endpoint ApiManagementOpenidConnectProvider#metadata_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#name ApiManagementOpenidConnectProvider#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#resource_group_name ApiManagementOpenidConnectProvider#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#description ApiManagementOpenidConnectProvider#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#id ApiManagementOpenidConnectProvider#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts">ApiManagementOpenidConnectProviderTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.apiManagementName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#api_management_name ApiManagementOpenidConnectProvider#api_management_name}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#client_id ApiManagementOpenidConnectProvider#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#client_secret ApiManagementOpenidConnectProvider#client_secret}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#display_name ApiManagementOpenidConnectProvider#display_name}.

---

##### `metadata_endpoint`<sup>Required</sup> <a name="metadata_endpoint" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.metadataEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#metadata_endpoint ApiManagementOpenidConnectProvider#metadata_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#name ApiManagementOpenidConnectProvider#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#resource_group_name ApiManagementOpenidConnectProvider#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#description ApiManagementOpenidConnectProvider#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#id ApiManagementOpenidConnectProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts">ApiManagementOpenidConnectProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#timeouts ApiManagementOpenidConnectProvider#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#create ApiManagementOpenidConnectProvider#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#delete ApiManagementOpenidConnectProvider#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#read ApiManagementOpenidConnectProvider#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#update ApiManagementOpenidConnectProvider#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApiManagementOpenidConnectProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_openid_connect_provider

apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_openid_connect_provider

apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_openid_connect_provider

apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_openid_connect_provider

apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApiManagementOpenidConnectProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApiManagementOpenidConnectProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApiManagementOpenidConnectProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApiManagementOpenidConnectProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference">ApiManagementOpenidConnectProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.apiManagementNameInput">api_management_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.metadataEndpointInput">metadata_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts">ApiManagementOpenidConnectProviderTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.apiManagementName">api_management_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.metadataEndpoint">metadata_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.timeouts"></a>

```python
timeouts: ApiManagementOpenidConnectProviderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference">ApiManagementOpenidConnectProviderTimeoutsOutputReference</a>

---

##### `api_management_name_input`<sup>Optional</sup> <a name="api_management_name_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.apiManagementNameInput"></a>

```python
api_management_name_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_endpoint_input`<sup>Optional</sup> <a name="metadata_endpoint_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.metadataEndpointInput"></a>

```python
metadata_endpoint_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApiManagementOpenidConnectProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts">ApiManagementOpenidConnectProviderTimeouts</a>]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata_endpoint`<sup>Required</sup> <a name="metadata_endpoint" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.metadataEndpoint"></a>

```python
metadata_endpoint: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApiManagementOpenidConnectProviderConfig <a name="ApiManagementOpenidConnectProviderConfig" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_openid_connect_provider

apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  api_management_name: str,
  client_id: str,
  client_secret: str,
  display_name: str,
  metadata_endpoint: str,
  name: str,
  resource_group_name: str,
  description: str = None,
  id: str = None,
  timeouts: ApiManagementOpenidConnectProviderTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.apiManagementName">api_management_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#api_management_name ApiManagementOpenidConnectProvider#api_management_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#client_id ApiManagementOpenidConnectProvider#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#client_secret ApiManagementOpenidConnectProvider#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#display_name ApiManagementOpenidConnectProvider#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.metadataEndpoint">metadata_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#metadata_endpoint ApiManagementOpenidConnectProvider#metadata_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#name ApiManagementOpenidConnectProvider#name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#resource_group_name ApiManagementOpenidConnectProvider#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#description ApiManagementOpenidConnectProvider#description}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#id ApiManagementOpenidConnectProvider#id}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts">ApiManagementOpenidConnectProviderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `api_management_name`<sup>Required</sup> <a name="api_management_name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.apiManagementName"></a>

```python
api_management_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#api_management_name ApiManagementOpenidConnectProvider#api_management_name}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#client_id ApiManagementOpenidConnectProvider#client_id}.

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#client_secret ApiManagementOpenidConnectProvider#client_secret}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#display_name ApiManagementOpenidConnectProvider#display_name}.

---

##### `metadata_endpoint`<sup>Required</sup> <a name="metadata_endpoint" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.metadataEndpoint"></a>

```python
metadata_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#metadata_endpoint ApiManagementOpenidConnectProvider#metadata_endpoint}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#name ApiManagementOpenidConnectProvider#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#resource_group_name ApiManagementOpenidConnectProvider#resource_group_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#description ApiManagementOpenidConnectProvider#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#id ApiManagementOpenidConnectProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderConfig.property.timeouts"></a>

```python
timeouts: ApiManagementOpenidConnectProviderTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts">ApiManagementOpenidConnectProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#timeouts ApiManagementOpenidConnectProvider#timeouts}

---

### ApiManagementOpenidConnectProviderTimeouts <a name="ApiManagementOpenidConnectProviderTimeouts" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_openid_connect_provider

apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#create ApiManagementOpenidConnectProvider#create}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#delete ApiManagementOpenidConnectProvider#delete}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#read ApiManagementOpenidConnectProvider#read}. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#update ApiManagementOpenidConnectProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#create ApiManagementOpenidConnectProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#delete ApiManagementOpenidConnectProvider#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#read ApiManagementOpenidConnectProvider#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/api_management_openid_connect_provider#update ApiManagementOpenidConnectProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiManagementOpenidConnectProviderTimeoutsOutputReference <a name="ApiManagementOpenidConnectProviderTimeoutsOutputReference" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import api_management_openid_connect_provider

apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts">ApiManagementOpenidConnectProviderTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApiManagementOpenidConnectProviderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.apiManagementOpenidConnectProvider.ApiManagementOpenidConnectProviderTimeouts">ApiManagementOpenidConnectProviderTimeouts</a>]

---



