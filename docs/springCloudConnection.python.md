# `azurerm_spring_cloud_connection`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection).

# `springCloudConnection` Submodule <a name="`springCloudConnection` Submodule" id="@cdktf/provider-azurerm.springCloudConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudConnection <a name="SpringCloudConnection" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection azurerm_spring_cloud_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_connection

springCloudConnection.SpringCloudConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication: SpringCloudConnectionAuthentication,
  name: str,
  spring_cloud_id: str,
  target_resource_id: str,
  client_type: str = None,
  id: str = None,
  secret_store: SpringCloudConnectionSecretStore = None,
  timeouts: SpringCloudConnectionTimeouts = None,
  vnet_solution: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication">SpringCloudConnectionAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#name SpringCloudConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.springCloudId">spring_cloud_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#spring_cloud_id SpringCloudConnection#spring_cloud_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#target_resource_id SpringCloudConnection#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.clientType">client_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#client_type SpringCloudConnection#client_type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#id SpringCloudConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.secretStore">secret_store</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore">SpringCloudConnectionSecretStore</a></code> | secret_store block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts">SpringCloudConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.vnetSolution">vnet_solution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#vnet_solution SpringCloudConnection#vnet_solution}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.authentication"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication">SpringCloudConnectionAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#authentication SpringCloudConnection#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#name SpringCloudConnection#name}.

---

##### `spring_cloud_id`<sup>Required</sup> <a name="spring_cloud_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.springCloudId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#spring_cloud_id SpringCloudConnection#spring_cloud_id}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#target_resource_id SpringCloudConnection#target_resource_id}.

---

##### `client_type`<sup>Optional</sup> <a name="client_type" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.clientType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#client_type SpringCloudConnection#client_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#id SpringCloudConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secret_store`<sup>Optional</sup> <a name="secret_store" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.secretStore"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore">SpringCloudConnectionSecretStore</a>

secret_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#secret_store SpringCloudConnection#secret_store}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts">SpringCloudConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#timeouts SpringCloudConnection#timeouts}

---

##### `vnet_solution`<sup>Optional</sup> <a name="vnet_solution" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.Initializer.parameter.vnetSolution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#vnet_solution SpringCloudConnection#vnet_solution}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putAuthentication">put_authentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putSecretStore">put_secret_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetClientType">reset_client_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetSecretStore">reset_secret_store</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetVnetSolution">reset_vnet_solution</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_authentication` <a name="put_authentication" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putAuthentication"></a>

```python
def put_authentication(
  type: str,
  certificate: str = None,
  client_id: str = None,
  name: str = None,
  principal_id: str = None,
  secret: str = None,
  subscription_id: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putAuthentication.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#type SpringCloudConnection#type}.

---

###### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putAuthentication.parameter.certificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#certificate SpringCloudConnection#certificate}.

---

###### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putAuthentication.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#client_id SpringCloudConnection#client_id}.

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putAuthentication.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#name SpringCloudConnection#name}.

---

###### `principal_id`<sup>Optional</sup> <a name="principal_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putAuthentication.parameter.principalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#principal_id SpringCloudConnection#principal_id}.

---

###### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putAuthentication.parameter.secret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#secret SpringCloudConnection#secret}.

---

###### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putAuthentication.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#subscription_id SpringCloudConnection#subscription_id}.

---

##### `put_secret_store` <a name="put_secret_store" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putSecretStore"></a>

```python
def put_secret_store(
  key_vault_id: str
) -> None
```

###### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putSecretStore.parameter.keyVaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#key_vault_id SpringCloudConnection#key_vault_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#create SpringCloudConnection#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#delete SpringCloudConnection#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#read SpringCloudConnection#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#update SpringCloudConnection#update}.

---

##### `reset_client_type` <a name="reset_client_type" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetClientType"></a>

```python
def reset_client_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_secret_store` <a name="reset_secret_store" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetSecretStore"></a>

```python
def reset_secret_store() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vnet_solution` <a name="reset_vnet_solution" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.resetVnetSolution"></a>

```python
def reset_vnet_solution() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_connection

springCloudConnection.SpringCloudConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_connection

springCloudConnection.SpringCloudConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_connection

springCloudConnection.SpringCloudConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference">SpringCloudConnectionAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.secretStore">secret_store</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference">SpringCloudConnectionSecretStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference">SpringCloudConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.authenticationInput">authentication_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication">SpringCloudConnectionAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.clientTypeInput">client_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.secretStoreInput">secret_store_input</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore">SpringCloudConnectionSecretStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.springCloudIdInput">spring_cloud_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts">SpringCloudConnectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.vnetSolutionInput">vnet_solution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.clientType">client_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.springCloudId">spring_cloud_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.vnetSolution">vnet_solution</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.authentication"></a>

```python
authentication: SpringCloudConnectionAuthenticationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference">SpringCloudConnectionAuthenticationOutputReference</a>

---

##### `secret_store`<sup>Required</sup> <a name="secret_store" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.secretStore"></a>

```python
secret_store: SpringCloudConnectionSecretStoreOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference">SpringCloudConnectionSecretStoreOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.timeouts"></a>

```python
timeouts: SpringCloudConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference">SpringCloudConnectionTimeoutsOutputReference</a>

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.authenticationInput"></a>

```python
authentication_input: SpringCloudConnectionAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication">SpringCloudConnectionAuthentication</a>

---

##### `client_type_input`<sup>Optional</sup> <a name="client_type_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.clientTypeInput"></a>

```python
client_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `secret_store_input`<sup>Optional</sup> <a name="secret_store_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.secretStoreInput"></a>

```python
secret_store_input: SpringCloudConnectionSecretStore
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore">SpringCloudConnectionSecretStore</a>

---

##### `spring_cloud_id_input`<sup>Optional</sup> <a name="spring_cloud_id_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.springCloudIdInput"></a>

```python
spring_cloud_id_input: str
```

- *Type:* str

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[SpringCloudConnectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts">SpringCloudConnectionTimeouts</a>, cdktf.IResolvable]

---

##### `vnet_solution_input`<sup>Optional</sup> <a name="vnet_solution_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.vnetSolutionInput"></a>

```python
vnet_solution_input: str
```

- *Type:* str

---

##### `client_type`<sup>Required</sup> <a name="client_type" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.clientType"></a>

```python
client_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `spring_cloud_id`<sup>Required</sup> <a name="spring_cloud_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.springCloudId"></a>

```python
spring_cloud_id: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `vnet_solution`<sup>Required</sup> <a name="vnet_solution" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.vnetSolution"></a>

```python
vnet_solution: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudConnectionAuthentication <a name="SpringCloudConnectionAuthentication" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_connection

springCloudConnection.SpringCloudConnectionAuthentication(
  type: str,
  certificate: str = None,
  client_id: str = None,
  name: str = None,
  principal_id: str = None,
  secret: str = None,
  subscription_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#type SpringCloudConnection#type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.certificate">certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#certificate SpringCloudConnection#certificate}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#client_id SpringCloudConnection#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#name SpringCloudConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#principal_id SpringCloudConnection#principal_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#secret SpringCloudConnection#secret}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#subscription_id SpringCloudConnection#subscription_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#type SpringCloudConnection#type}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#certificate SpringCloudConnection#certificate}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#client_id SpringCloudConnection#client_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#name SpringCloudConnection#name}.

---

##### `principal_id`<sup>Optional</sup> <a name="principal_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#principal_id SpringCloudConnection#principal_id}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.secret"></a>

```python
secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#secret SpringCloudConnection#secret}.

---

##### `subscription_id`<sup>Optional</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#subscription_id SpringCloudConnection#subscription_id}.

---

### SpringCloudConnectionConfig <a name="SpringCloudConnectionConfig" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_connection

springCloudConnection.SpringCloudConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  authentication: SpringCloudConnectionAuthentication,
  name: str,
  spring_cloud_id: str,
  target_resource_id: str,
  client_type: str = None,
  id: str = None,
  secret_store: SpringCloudConnectionSecretStore = None,
  timeouts: SpringCloudConnectionTimeouts = None,
  vnet_solution: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.authentication">authentication</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication">SpringCloudConnectionAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#name SpringCloudConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.springCloudId">spring_cloud_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#spring_cloud_id SpringCloudConnection#spring_cloud_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#target_resource_id SpringCloudConnection#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.clientType">client_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#client_type SpringCloudConnection#client_type}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#id SpringCloudConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.secretStore">secret_store</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore">SpringCloudConnectionSecretStore</a></code> | secret_store block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts">SpringCloudConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.vnetSolution">vnet_solution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#vnet_solution SpringCloudConnection#vnet_solution}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.authentication"></a>

```python
authentication: SpringCloudConnectionAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication">SpringCloudConnectionAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#authentication SpringCloudConnection#authentication}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#name SpringCloudConnection#name}.

---

##### `spring_cloud_id`<sup>Required</sup> <a name="spring_cloud_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.springCloudId"></a>

```python
spring_cloud_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#spring_cloud_id SpringCloudConnection#spring_cloud_id}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#target_resource_id SpringCloudConnection#target_resource_id}.

---

##### `client_type`<sup>Optional</sup> <a name="client_type" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.clientType"></a>

```python
client_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#client_type SpringCloudConnection#client_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#id SpringCloudConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secret_store`<sup>Optional</sup> <a name="secret_store" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.secretStore"></a>

```python
secret_store: SpringCloudConnectionSecretStore
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore">SpringCloudConnectionSecretStore</a>

secret_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#secret_store SpringCloudConnection#secret_store}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.timeouts"></a>

```python
timeouts: SpringCloudConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts">SpringCloudConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#timeouts SpringCloudConnection#timeouts}

---

##### `vnet_solution`<sup>Optional</sup> <a name="vnet_solution" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionConfig.property.vnetSolution"></a>

```python
vnet_solution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#vnet_solution SpringCloudConnection#vnet_solution}.

---

### SpringCloudConnectionSecretStore <a name="SpringCloudConnectionSecretStore" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_connection

springCloudConnection.SpringCloudConnectionSecretStore(
  key_vault_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#key_vault_id SpringCloudConnection#key_vault_id}. |

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#key_vault_id SpringCloudConnection#key_vault_id}.

---

### SpringCloudConnectionTimeouts <a name="SpringCloudConnectionTimeouts" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_connection

springCloudConnection.SpringCloudConnectionTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#create SpringCloudConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#delete SpringCloudConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#read SpringCloudConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#update SpringCloudConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#create SpringCloudConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#delete SpringCloudConnection#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#read SpringCloudConnection#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/resources/spring_cloud_connection#update SpringCloudConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudConnectionAuthenticationOutputReference <a name="SpringCloudConnectionAuthenticationOutputReference" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_connection

springCloudConnection.SpringCloudConnectionAuthenticationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetPrincipalId">reset_principal_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetSecret">reset_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetSubscriptionId">reset_subscription_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_principal_id` <a name="reset_principal_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetPrincipalId"></a>

```python
def reset_principal_id() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetSecret"></a>

```python
def reset_secret() -> None
```

##### `reset_subscription_id` <a name="reset_subscription_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.resetSubscriptionId"></a>

```python
def reset_subscription_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication">SpringCloudConnectionAuthentication</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthenticationOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudConnectionAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionAuthentication">SpringCloudConnectionAuthentication</a>

---


### SpringCloudConnectionSecretStoreOutputReference <a name="SpringCloudConnectionSecretStoreOutputReference" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_connection

springCloudConnection.SpringCloudConnectionSecretStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.property.keyVaultIdInput">key_vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore">SpringCloudConnectionSecretStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_vault_id_input`<sup>Optional</sup> <a name="key_vault_id_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.property.keyVaultIdInput"></a>

```python
key_vault_id_input: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStoreOutputReference.property.internalValue"></a>

```python
internal_value: SpringCloudConnectionSecretStore
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionSecretStore">SpringCloudConnectionSecretStore</a>

---


### SpringCloudConnectionTimeoutsOutputReference <a name="SpringCloudConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import spring_cloud_connection

springCloudConnection.SpringCloudConnectionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts">SpringCloudConnectionTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[SpringCloudConnectionTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.springCloudConnection.SpringCloudConnectionTimeouts">SpringCloudConnectionTimeouts</a>, cdktf.IResolvable]

---



