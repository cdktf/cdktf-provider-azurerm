# `dataAzurermAppServiceCertificateOrder` Submodule <a name="`dataAzurermAppServiceCertificateOrder` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppServiceCertificateOrder <a name="DataAzurermAppServiceCertificateOrder" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order azurerm_app_service_certificate_order}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_certificate_order

dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermAppServiceCertificateOrderTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#name DataAzurermAppServiceCertificateOrder#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#resource_group_name DataAzurermAppServiceCertificateOrder#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#id DataAzurermAppServiceCertificateOrder#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#name DataAzurermAppServiceCertificateOrder#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#resource_group_name DataAzurermAppServiceCertificateOrder#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#id DataAzurermAppServiceCertificateOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#timeouts DataAzurermAppServiceCertificateOrder#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#read DataAzurermAppServiceCertificateOrder#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermAppServiceCertificateOrder resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_certificate_order

dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_certificate_order

dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_certificate_order

dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_certificate_order

dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermAppServiceCertificateOrder resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermAppServiceCertificateOrder to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermAppServiceCertificateOrder that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermAppServiceCertificateOrder to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons">app_service_certificate_not_renewable_reasons</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.autoRenew">auto_renew</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.certificates">certificates</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList">DataAzurermAppServiceCertificateOrderCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.csr">csr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.distinguishedName">distinguished_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.domainVerificationToken">domain_verification_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.intermediateThumbprint">intermediate_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.isPrivateKeyExternal">is_private_key_external</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.keySize">key_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.productType">product_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.rootThumbprint">root_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.signedCertificateThumbprint">signed_certificate_thumbprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference">DataAzurermAppServiceCertificateOrderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.validityInYears">validity_in_years</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `app_service_certificate_not_renewable_reasons`<sup>Required</sup> <a name="app_service_certificate_not_renewable_reasons" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.appServiceCertificateNotRenewableReasons"></a>

```python
app_service_certificate_not_renewable_reasons: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `auto_renew`<sup>Required</sup> <a name="auto_renew" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.autoRenew"></a>

```python
auto_renew: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.certificates"></a>

```python
certificates: DataAzurermAppServiceCertificateOrderCertificatesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList">DataAzurermAppServiceCertificateOrderCertificatesList</a>

---

##### `csr`<sup>Required</sup> <a name="csr" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.csr"></a>

```python
csr: str
```

- *Type:* str

---

##### `distinguished_name`<sup>Required</sup> <a name="distinguished_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.distinguishedName"></a>

```python
distinguished_name: str
```

- *Type:* str

---

##### `domain_verification_token`<sup>Required</sup> <a name="domain_verification_token" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.domainVerificationToken"></a>

```python
domain_verification_token: str
```

- *Type:* str

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `intermediate_thumbprint`<sup>Required</sup> <a name="intermediate_thumbprint" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.intermediateThumbprint"></a>

```python
intermediate_thumbprint: str
```

- *Type:* str

---

##### `is_private_key_external`<sup>Required</sup> <a name="is_private_key_external" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.isPrivateKeyExternal"></a>

```python
is_private_key_external: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_size`<sup>Required</sup> <a name="key_size" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.keySize"></a>

```python
key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `product_type`<sup>Required</sup> <a name="product_type" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.productType"></a>

```python
product_type: str
```

- *Type:* str

---

##### `root_thumbprint`<sup>Required</sup> <a name="root_thumbprint" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.rootThumbprint"></a>

```python
root_thumbprint: str
```

- *Type:* str

---

##### `signed_certificate_thumbprint`<sup>Required</sup> <a name="signed_certificate_thumbprint" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.signedCertificateThumbprint"></a>

```python
signed_certificate_thumbprint: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeouts"></a>

```python
timeouts: DataAzurermAppServiceCertificateOrderTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference">DataAzurermAppServiceCertificateOrderTimeoutsOutputReference</a>

---

##### `validity_in_years`<sup>Required</sup> <a name="validity_in_years" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.validityInYears"></a>

```python
validity_in_years: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermAppServiceCertificateOrderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrder.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppServiceCertificateOrderCertificates <a name="DataAzurermAppServiceCertificateOrderCertificates" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_certificate_order

dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates()
```


### DataAzurermAppServiceCertificateOrderConfig <a name="DataAzurermAppServiceCertificateOrderConfig" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_certificate_order

dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermAppServiceCertificateOrderTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#name DataAzurermAppServiceCertificateOrder#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#resource_group_name DataAzurermAppServiceCertificateOrder#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#id DataAzurermAppServiceCertificateOrder#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#name DataAzurermAppServiceCertificateOrder#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#resource_group_name DataAzurermAppServiceCertificateOrder#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#id DataAzurermAppServiceCertificateOrder#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderConfig.property.timeouts"></a>

```python
timeouts: DataAzurermAppServiceCertificateOrderTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#timeouts DataAzurermAppServiceCertificateOrder#timeouts}

---

### DataAzurermAppServiceCertificateOrderTimeouts <a name="DataAzurermAppServiceCertificateOrderTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_certificate_order

dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#read DataAzurermAppServiceCertificateOrder#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/app_service_certificate_order#read DataAzurermAppServiceCertificateOrder#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppServiceCertificateOrderCertificatesList <a name="DataAzurermAppServiceCertificateOrderCertificatesList" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_certificate_order

dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermAppServiceCertificateOrderCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermAppServiceCertificateOrderCertificatesOutputReference <a name="DataAzurermAppServiceCertificateOrderCertificatesOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_certificate_order

dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.certificateName">certificate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId">key_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName">key_vault_secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.provisioningState">provisioning_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates">DataAzurermAppServiceCertificateOrderCertificates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_name`<sup>Required</sup> <a name="certificate_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.certificateName"></a>

```python
certificate_name: str
```

- *Type:* str

---

##### `key_vault_id`<sup>Required</sup> <a name="key_vault_id" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultId"></a>

```python
key_vault_id: str
```

- *Type:* str

---

##### `key_vault_secret_name`<sup>Required</sup> <a name="key_vault_secret_name" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.keyVaultSecretName"></a>

```python
key_vault_secret_name: str
```

- *Type:* str

---

##### `provisioning_state`<sup>Required</sup> <a name="provisioning_state" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.provisioningState"></a>

```python
provisioning_state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermAppServiceCertificateOrderCertificates
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderCertificates">DataAzurermAppServiceCertificateOrderCertificates</a>

---


### DataAzurermAppServiceCertificateOrderTimeoutsOutputReference <a name="DataAzurermAppServiceCertificateOrderTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_app_service_certificate_order

dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermAppServiceCertificateOrderTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermAppServiceCertificateOrder.DataAzurermAppServiceCertificateOrderTimeouts">DataAzurermAppServiceCertificateOrderTimeouts</a>]

---



