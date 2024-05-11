# `dataAzurermWebPubsubPrivateLinkResource` Submodule <a name="`dataAzurermWebPubsubPrivateLinkResource` Submodule" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermWebPubsubPrivateLinkResource <a name="DataAzurermWebPubsubPrivateLinkResource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource azurerm_web_pubsub_private_link_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_web_pubsub_private_link_resource

dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  web_pubsub_id: str,
  id: str = None,
  timeouts: DataAzurermWebPubsubPrivateLinkResourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#web_pubsub_id DataAzurermWebPubsubPrivateLinkResource#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#id DataAzurermWebPubsubPrivateLinkResource#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.webPubsubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#web_pubsub_id DataAzurermWebPubsubPrivateLinkResource#web_pubsub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#id DataAzurermWebPubsubPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#timeouts DataAzurermWebPubsubPrivateLinkResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#read DataAzurermWebPubsubPrivateLinkResource#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermWebPubsubPrivateLinkResource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_web_pubsub_private_link_resource

dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_web_pubsub_private_link_resource

dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_web_pubsub_private_link_resource

dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_web_pubsub_private_link_resource

dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermWebPubsubPrivateLinkResource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermWebPubsubPrivateLinkResource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermWebPubsubPrivateLinkResource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermWebPubsubPrivateLinkResource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.sharedPrivateLinkResourceTypes">shared_private_link_resource_types</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference">DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubIdInput">web_pubsub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `shared_private_link_resource_types`<sup>Required</sup> <a name="shared_private_link_resource_types" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.sharedPrivateLinkResourceTypes"></a>

```python
shared_private_link_resource_types: DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeouts"></a>

```python
timeouts: DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference">DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermWebPubsubPrivateLinkResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a>]

---

##### `web_pubsub_id_input`<sup>Optional</sup> <a name="web_pubsub_id_input" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubIdInput"></a>

```python
web_pubsub_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubId"></a>

```python
web_pubsub_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermWebPubsubPrivateLinkResourceConfig <a name="DataAzurermWebPubsubPrivateLinkResourceConfig" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_web_pubsub_private_link_resource

dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  web_pubsub_id: str,
  id: str = None,
  timeouts: DataAzurermWebPubsubPrivateLinkResourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#web_pubsub_id DataAzurermWebPubsubPrivateLinkResource#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#id DataAzurermWebPubsubPrivateLinkResource#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.webPubsubId"></a>

```python
web_pubsub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#web_pubsub_id DataAzurermWebPubsubPrivateLinkResource#web_pubsub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#id DataAzurermWebPubsubPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.timeouts"></a>

```python
timeouts: DataAzurermWebPubsubPrivateLinkResourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#timeouts DataAzurermWebPubsubPrivateLinkResource#timeouts}

---

### DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes <a name="DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_web_pubsub_private_link_resource

dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes()
```


### DataAzurermWebPubsubPrivateLinkResourceTimeouts <a name="DataAzurermWebPubsubPrivateLinkResourceTimeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_web_pubsub_private_link_resource

dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#read DataAzurermWebPubsubPrivateLinkResource#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.103.1/docs/data-sources/web_pubsub_private_link_resource#read DataAzurermWebPubsubPrivateLinkResource#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList <a name="DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_web_pubsub_private_link_resource

dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference <a name="DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_web_pubsub_private_link_resource

dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.subresourceName">subresource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `subresource_name`<sup>Required</sup> <a name="subresource_name" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.subresourceName"></a>

```python
subresource_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes</a>

---


### DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference <a name="DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_web_pubsub_private_link_resource

dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermWebPubsubPrivateLinkResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a>]

---



