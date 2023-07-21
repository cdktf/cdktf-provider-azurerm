# `azurerm_web_pubsub_network_acl`

Refer to the Terraform Registory for docs: [`azurerm_web_pubsub_network_acl`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl).

# `webPubsubNetworkAcl` Submodule <a name="`webPubsubNetworkAcl` Submodule" id="@cdktf/provider-azurerm.webPubsubNetworkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubNetworkAcl <a name="WebPubsubNetworkAcl" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl azurerm_web_pubsub_network_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAcl(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  public_network: WebPubsubNetworkAclPublicNetwork,
  web_pubsub_id: str,
  default_action: str = None,
  id: str = None,
  private_endpoint: typing.Union[IResolvable, typing.List[WebPubsubNetworkAclPrivateEndpoint]] = None,
  timeouts: WebPubsubNetworkAclTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.publicNetwork">public_network</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a></code> | public_network block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#web_pubsub_id WebPubsubNetworkAcl#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#default_action WebPubsubNetworkAcl#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.privateEndpoint">private_endpoint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>]]</code> | private_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `public_network`<sup>Required</sup> <a name="public_network" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.publicNetwork"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

public_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#public_network WebPubsubNetworkAcl#public_network}

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.webPubsubId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#web_pubsub_id WebPubsubNetworkAcl#web_pubsub_id}.

---

##### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.defaultAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#default_action WebPubsubNetworkAcl#default_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_endpoint`<sup>Optional</sup> <a name="private_endpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.privateEndpoint"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>]]

private_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#private_endpoint WebPubsubNetworkAcl#private_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#timeouts WebPubsubNetworkAcl#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPrivateEndpoint">put_private_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPublicNetwork">put_public_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetDefaultAction">reset_default_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetPrivateEndpoint">reset_private_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_private_endpoint` <a name="put_private_endpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPrivateEndpoint"></a>

```python
def put_private_endpoint(
  value: typing.Union[IResolvable, typing.List[WebPubsubNetworkAclPrivateEndpoint]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPrivateEndpoint.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>]]

---

##### `put_public_network` <a name="put_public_network" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPublicNetwork"></a>

```python
def put_public_network(
  allowed_request_types: typing.List[str] = None,
  denied_request_types: typing.List[str] = None
) -> None
```

###### `allowed_request_types`<sup>Optional</sup> <a name="allowed_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPublicNetwork.parameter.allowedRequestTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}.

---

###### `denied_request_types`<sup>Optional</sup> <a name="denied_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPublicNetwork.parameter.deniedRequestTypes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#create WebPubsubNetworkAcl#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#delete WebPubsubNetworkAcl#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#read WebPubsubNetworkAcl#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#update WebPubsubNetworkAcl#update}.

---

##### `reset_default_action` <a name="reset_default_action" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetDefaultAction"></a>

```python
def reset_default_action() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_private_endpoint` <a name="reset_private_endpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetPrivateEndpoint"></a>

```python
def reset_private_endpoint() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAcl.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAcl.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAcl.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpoint">private_endpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList">WebPubsubNetworkAclPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetwork">public_network</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference">WebPubsubNetworkAclPublicNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference">WebPubsubNetworkAclTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultActionInput">default_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpointInput">private_endpoint_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetworkInput">public_network_input</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubIdInput">web_pubsub_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultAction">default_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_endpoint`<sup>Required</sup> <a name="private_endpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpoint"></a>

```python
private_endpoint: WebPubsubNetworkAclPrivateEndpointList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList">WebPubsubNetworkAclPrivateEndpointList</a>

---

##### `public_network`<sup>Required</sup> <a name="public_network" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetwork"></a>

```python
public_network: WebPubsubNetworkAclPublicNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference">WebPubsubNetworkAclPublicNetworkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeouts"></a>

```python
timeouts: WebPubsubNetworkAclTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference">WebPubsubNetworkAclTimeoutsOutputReference</a>

---

##### `default_action_input`<sup>Optional</sup> <a name="default_action_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultActionInput"></a>

```python
default_action_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `private_endpoint_input`<sup>Optional</sup> <a name="private_endpoint_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpointInput"></a>

```python
private_endpoint_input: typing.Union[IResolvable, typing.List[WebPubsubNetworkAclPrivateEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>]]

---

##### `public_network_input`<sup>Optional</sup> <a name="public_network_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetworkInput"></a>

```python
public_network_input: WebPubsubNetworkAclPublicNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, WebPubsubNetworkAclTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>]

---

##### `web_pubsub_id_input`<sup>Optional</sup> <a name="web_pubsub_id_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubIdInput"></a>

```python
web_pubsub_id_input: str
```

- *Type:* str

---

##### `default_action`<sup>Required</sup> <a name="default_action" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubId"></a>

```python
web_pubsub_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubNetworkAclConfig <a name="WebPubsubNetworkAclConfig" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAclConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  public_network: WebPubsubNetworkAclPublicNetwork,
  web_pubsub_id: str,
  default_action: str = None,
  id: str = None,
  private_endpoint: typing.Union[IResolvable, typing.List[WebPubsubNetworkAclPrivateEndpoint]] = None,
  timeouts: WebPubsubNetworkAclTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.publicNetwork">public_network</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a></code> | public_network block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.webPubsubId">web_pubsub_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#web_pubsub_id WebPubsubNetworkAcl#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.defaultAction">default_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#default_action WebPubsubNetworkAcl#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.privateEndpoint">private_endpoint</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>]]</code> | private_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `public_network`<sup>Required</sup> <a name="public_network" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.publicNetwork"></a>

```python
public_network: WebPubsubNetworkAclPublicNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

public_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#public_network WebPubsubNetworkAcl#public_network}

---

##### `web_pubsub_id`<sup>Required</sup> <a name="web_pubsub_id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.webPubsubId"></a>

```python
web_pubsub_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#web_pubsub_id WebPubsubNetworkAcl#web_pubsub_id}.

---

##### `default_action`<sup>Optional</sup> <a name="default_action" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.defaultAction"></a>

```python
default_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#default_action WebPubsubNetworkAcl#default_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_endpoint`<sup>Optional</sup> <a name="private_endpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.privateEndpoint"></a>

```python
private_endpoint: typing.Union[IResolvable, typing.List[WebPubsubNetworkAclPrivateEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>]]

private_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#private_endpoint WebPubsubNetworkAcl#private_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.timeouts"></a>

```python
timeouts: WebPubsubNetworkAclTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#timeouts WebPubsubNetworkAcl#timeouts}

---

### WebPubsubNetworkAclPrivateEndpoint <a name="WebPubsubNetworkAclPrivateEndpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint(
  id: str,
  allowed_request_types: typing.List[str] = None,
  denied_request_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.allowedRequestTypes">allowed_request_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.deniedRequestTypes">denied_request_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `allowed_request_types`<sup>Optional</sup> <a name="allowed_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.allowedRequestTypes"></a>

```python
allowed_request_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}.

---

##### `denied_request_types`<sup>Optional</sup> <a name="denied_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.deniedRequestTypes"></a>

```python
denied_request_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}.

---

### WebPubsubNetworkAclPublicNetwork <a name="WebPubsubNetworkAclPublicNetwork" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork(
  allowed_request_types: typing.List[str] = None,
  denied_request_types: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.allowedRequestTypes">allowed_request_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.deniedRequestTypes">denied_request_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}. |

---

##### `allowed_request_types`<sup>Optional</sup> <a name="allowed_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.allowedRequestTypes"></a>

```python
allowed_request_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}.

---

##### `denied_request_types`<sup>Optional</sup> <a name="denied_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.deniedRequestTypes"></a>

```python
denied_request_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}.

---

### WebPubsubNetworkAclTimeouts <a name="WebPubsubNetworkAclTimeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#create WebPubsubNetworkAcl#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#delete WebPubsubNetworkAcl#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#read WebPubsubNetworkAcl#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#update WebPubsubNetworkAcl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#create WebPubsubNetworkAcl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#delete WebPubsubNetworkAcl#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#read WebPubsubNetworkAcl#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/web_pubsub_network_acl#update WebPubsubNetworkAcl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubNetworkAclPrivateEndpointList <a name="WebPubsubNetworkAclPrivateEndpointList" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> WebPubsubNetworkAclPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[WebPubsubNetworkAclPrivateEndpoint]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>]]

---


### WebPubsubNetworkAclPrivateEndpointOutputReference <a name="WebPubsubNetworkAclPrivateEndpointOutputReference" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetAllowedRequestTypes">reset_allowed_request_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetDeniedRequestTypes">reset_denied_request_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_request_types` <a name="reset_allowed_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetAllowedRequestTypes"></a>

```python
def reset_allowed_request_types() -> None
```

##### `reset_denied_request_types` <a name="reset_denied_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetDeniedRequestTypes"></a>

```python
def reset_denied_request_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypesInput">allowed_request_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypesInput">denied_request_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypes">allowed_request_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypes">denied_request_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_request_types_input`<sup>Optional</sup> <a name="allowed_request_types_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypesInput"></a>

```python
allowed_request_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_request_types_input`<sup>Optional</sup> <a name="denied_request_types_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypesInput"></a>

```python
denied_request_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `allowed_request_types`<sup>Required</sup> <a name="allowed_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypes"></a>

```python
allowed_request_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_request_types`<sup>Required</sup> <a name="denied_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypes"></a>

```python
denied_request_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebPubsubNetworkAclPrivateEndpoint]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>]

---


### WebPubsubNetworkAclPublicNetworkOutputReference <a name="WebPubsubNetworkAclPublicNetworkOutputReference" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetAllowedRequestTypes">reset_allowed_request_types</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetDeniedRequestTypes">reset_denied_request_types</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_request_types` <a name="reset_allowed_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetAllowedRequestTypes"></a>

```python
def reset_allowed_request_types() -> None
```

##### `reset_denied_request_types` <a name="reset_denied_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetDeniedRequestTypes"></a>

```python
def reset_denied_request_types() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypesInput">allowed_request_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypesInput">denied_request_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypes">allowed_request_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypes">denied_request_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_request_types_input`<sup>Optional</sup> <a name="allowed_request_types_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypesInput"></a>

```python
allowed_request_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_request_types_input`<sup>Optional</sup> <a name="denied_request_types_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypesInput"></a>

```python
denied_request_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_request_types`<sup>Required</sup> <a name="allowed_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypes"></a>

```python
allowed_request_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_request_types`<sup>Required</sup> <a name="denied_request_types" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypes"></a>

```python
denied_request_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.internalValue"></a>

```python
internal_value: WebPubsubNetworkAclPublicNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

---


### WebPubsubNetworkAclTimeoutsOutputReference <a name="WebPubsubNetworkAclTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import web_pubsub_network_acl

webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, WebPubsubNetworkAclTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>]

---



