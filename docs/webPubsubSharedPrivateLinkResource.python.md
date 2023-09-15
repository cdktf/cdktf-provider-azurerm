# `azurerm_web_pubsub_shared_private_link_resource`

Refer to the Terraform Registory for docs: [`azurerm_web_pubsub_shared_private_link_resource`](https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource).

# `webPubsubSharedPrivateLinkResource` Submodule <a name="`webPubsubSharedPrivateLinkResource` Submodule" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubSharedPrivateLinkResource <a name="WebPubsubSharedPrivateLinkResource" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource azurerm_web_pubsub_shared_private_link_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_shared_private_link_resource

webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource(
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
  subresource_name: str,
  target_resource_id: str,
  web_pubsub_id: str,
  id: str = None,
  request_message: str = None,
  timeouts: WebPubsubSharedPrivateLinkResourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#name WebPubsubSharedPrivateLinkResource#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.subresourceName">subresource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#subresource_name WebPubsubSharedPrivateLinkResource#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#target_resource_id WebPubsubSharedPrivateLinkResource#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#web_pubsub_id WebPubsubSharedPrivateLinkResource#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#id WebPubsubSharedPrivateLinkResource#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.requestMessage">request_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#request_message WebPubsubSharedPrivateLinkResource#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#name WebPubsubSharedPrivateLinkResource#name}.

---

##### `subresource_name`<sup>Required</sup> <a name="subresource_name" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.subresourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#subresource_name WebPubsubSharedPrivateLinkResource#subresource_name}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#target_resource_id WebPubsubSharedPrivateLinkResource#target_resource_id}.

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.webPubsubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#web_pubsub_id WebPubsubSharedPrivateLinkResource#web_pubsub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#id WebPubsubSharedPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `request_message`<sup>Optional</sup> <a name="request_message" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.requestMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#request_message WebPubsubSharedPrivateLinkResource#request_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#timeouts WebPubsubSharedPrivateLinkResource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetRequestMessage">reset_request_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#create WebPubsubSharedPrivateLinkResource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#delete WebPubsubSharedPrivateLinkResource#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#read WebPubsubSharedPrivateLinkResource#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#update WebPubsubSharedPrivateLinkResource#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_request_message` <a name="reset_request_message" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetRequestMessage"></a>

```python
def reset_request_message() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_shared_private_link_resource

webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_shared_private_link_resource

webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_shared_private_link_resource

webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference">WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessageInput">request_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceNameInput">subresource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubIdInput">web_pubsub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessage">request_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceName">subresource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeouts"></a>

```python
timeouts: WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference">WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `request_message_input`<sup>Optional</sup> <a name="request_message_input" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessageInput"></a>

```python
request_message_input: str
```

- *Type:* str

---

##### `subresource_name_input`<sup>Optional</sup> <a name="subresource_name_input" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceNameInput"></a>

```python
subresource_name_input: str
```

- *Type:* str

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WebPubsubSharedPrivateLinkResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a>]

---

##### `web_pubsub_id_input`<sup>Optional</sup> <a name="web_pubsub_id_input" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubIdInput"></a>

```python
web_pubsub_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `request_message`<sup>Required</sup> <a name="request_message" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessage"></a>

```python
request_message: str
```

- *Type:* str

---

##### `subresource_name`<sup>Required</sup> <a name="subresource_name" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceName"></a>

```python
subresource_name: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubId"></a>

```python
web_pubsub_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubSharedPrivateLinkResourceConfig <a name="WebPubsubSharedPrivateLinkResourceConfig" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_shared_private_link_resource

webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  subresource_name: str,
  target_resource_id: str,
  web_pubsub_id: str,
  id: str = None,
  request_message: str = None,
  timeouts: WebPubsubSharedPrivateLinkResourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#name WebPubsubSharedPrivateLinkResource#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.subresourceName">subresource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#subresource_name WebPubsubSharedPrivateLinkResource#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#target_resource_id WebPubsubSharedPrivateLinkResource#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#web_pubsub_id WebPubsubSharedPrivateLinkResource#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#id WebPubsubSharedPrivateLinkResource#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.requestMessage">request_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#request_message WebPubsubSharedPrivateLinkResource#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#name WebPubsubSharedPrivateLinkResource#name}.

---

##### `subresource_name`<sup>Required</sup> <a name="subresource_name" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.subresourceName"></a>

```python
subresource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#subresource_name WebPubsubSharedPrivateLinkResource#subresource_name}.

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#target_resource_id WebPubsubSharedPrivateLinkResource#target_resource_id}.

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.webPubsubId"></a>

```python
web_pubsub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#web_pubsub_id WebPubsubSharedPrivateLinkResource#web_pubsub_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#id WebPubsubSharedPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `request_message`<sup>Optional</sup> <a name="request_message" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.requestMessage"></a>

```python
request_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#request_message WebPubsubSharedPrivateLinkResource#request_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.timeouts"></a>

```python
timeouts: WebPubsubSharedPrivateLinkResourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#timeouts WebPubsubSharedPrivateLinkResource#timeouts}

---

### WebPubsubSharedPrivateLinkResourceTimeouts <a name="WebPubsubSharedPrivateLinkResourceTimeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_shared_private_link_resource

webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#create WebPubsubSharedPrivateLinkResource#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#delete WebPubsubSharedPrivateLinkResource#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#read WebPubsubSharedPrivateLinkResource#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#update WebPubsubSharedPrivateLinkResource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#create WebPubsubSharedPrivateLinkResource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#delete WebPubsubSharedPrivateLinkResource#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#read WebPubsubSharedPrivateLinkResource#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.73.0/docs/resources/web_pubsub_shared_private_link_resource#update WebPubsubSharedPrivateLinkResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference <a name="WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_shared_private_link_resource

webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebPubsubSharedPrivateLinkResourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a>]

---



