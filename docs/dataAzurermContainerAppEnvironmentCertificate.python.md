# `dataAzurermContainerAppEnvironmentCertificate` Submodule <a name="`dataAzurermContainerAppEnvironmentCertificate` Submodule" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermContainerAppEnvironmentCertificate <a name="DataAzurermContainerAppEnvironmentCertificate" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate azurerm_container_app_environment_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_container_app_environment_certificate

dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_app_environment_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermContainerAppEnvironmentCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | The Container App Managed Environment ID to configure this Certificate on. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Container Apps Certificate. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#id DataAzurermContainerAppEnvironmentCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.containerAppEnvironmentId"></a>

- *Type:* str

The Container App Managed Environment ID to configure this Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#container_app_environment_id DataAzurermContainerAppEnvironmentCertificate#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.name"></a>

- *Type:* str

The name of the Container Apps Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#name DataAzurermContainerAppEnvironmentCertificate#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#id DataAzurermContainerAppEnvironmentCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#timeouts DataAzurermContainerAppEnvironmentCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#read DataAzurermContainerAppEnvironmentCertificate#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermContainerAppEnvironmentCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_container_app_environment_certificate

dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_container_app_environment_certificate

dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_container_app_environment_certificate

dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_container_app_environment_certificate

dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermContainerAppEnvironmentCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermContainerAppEnvironmentCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermContainerAppEnvironmentCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermContainerAppEnvironmentCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.expirationDate">expiration_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issueDate">issue_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.subjectName">subject_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.thumbprint">thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference">DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentIdInput">container_app_environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `expiration_date`<sup>Required</sup> <a name="expiration_date" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.expirationDate"></a>

```python
expiration_date: str
```

- *Type:* str

---

##### `issue_date`<sup>Required</sup> <a name="issue_date" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issueDate"></a>

```python
issue_date: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `subject_name`<sup>Required</sup> <a name="subject_name" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.subjectName"></a>

```python
subject_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.thumbprint"></a>

```python
thumbprint: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeouts"></a>

```python
timeouts: DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference">DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference</a>

---

##### `container_app_environment_id_input`<sup>Optional</sup> <a name="container_app_environment_id_input" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentIdInput"></a>

```python
container_app_environment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermContainerAppEnvironmentCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentId"></a>

```python
container_app_environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermContainerAppEnvironmentCertificateConfig <a name="DataAzurermContainerAppEnvironmentCertificateConfig" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_container_app_environment_certificate

dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container_app_environment_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermContainerAppEnvironmentCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.containerAppEnvironmentId">container_app_environment_id</a></code> | <code>str</code> | The Container App Managed Environment ID to configure this Certificate on. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.name">name</a></code> | <code>str</code> | The name of the Container Apps Certificate. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#id DataAzurermContainerAppEnvironmentCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container_app_environment_id`<sup>Required</sup> <a name="container_app_environment_id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.containerAppEnvironmentId"></a>

```python
container_app_environment_id: str
```

- *Type:* str

The Container App Managed Environment ID to configure this Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#container_app_environment_id DataAzurermContainerAppEnvironmentCertificate#container_app_environment_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Container Apps Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#name DataAzurermContainerAppEnvironmentCertificate#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#id DataAzurermContainerAppEnvironmentCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.timeouts"></a>

```python
timeouts: DataAzurermContainerAppEnvironmentCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#timeouts DataAzurermContainerAppEnvironmentCertificate#timeouts}

---

### DataAzurermContainerAppEnvironmentCertificateTimeouts <a name="DataAzurermContainerAppEnvironmentCertificateTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_container_app_environment_certificate

dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#read DataAzurermContainerAppEnvironmentCertificate#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.109.0/docs/data-sources/container_app_environment_certificate#read DataAzurermContainerAppEnvironmentCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference <a name="DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_container_app_environment_certificate

dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermContainerAppEnvironmentCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>]

---



