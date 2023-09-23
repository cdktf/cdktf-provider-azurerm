# `data_azurerm_private_dns_resolver_inbound_endpoint`

Refer to the Terraform Registory for docs: [`data_azurerm_private_dns_resolver_inbound_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint).

# `dataAzurermPrivateDnsResolverInboundEndpoint` Submodule <a name="`dataAzurermPrivateDnsResolverInboundEndpoint` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsResolverInboundEndpoint <a name="DataAzurermPrivateDnsResolverInboundEndpoint" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint azurerm_private_dns_resolver_inbound_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_inbound_endpoint

dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint(
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
  private_dns_resolver_id: str,
  id: str = None,
  timeouts: DataAzurermPrivateDnsResolverInboundEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#name DataAzurermPrivateDnsResolverInboundEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.privateDnsResolverId">private_dns_resolver_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#private_dns_resolver_id DataAzurermPrivateDnsResolverInboundEndpoint#private_dns_resolver_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#id DataAzurermPrivateDnsResolverInboundEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts">DataAzurermPrivateDnsResolverInboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#name DataAzurermPrivateDnsResolverInboundEndpoint#name}.

---

##### `private_dns_resolver_id`<sup>Required</sup> <a name="private_dns_resolver_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.privateDnsResolverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#private_dns_resolver_id DataAzurermPrivateDnsResolverInboundEndpoint#private_dns_resolver_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#id DataAzurermPrivateDnsResolverInboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts">DataAzurermPrivateDnsResolverInboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#timeouts DataAzurermPrivateDnsResolverInboundEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#read DataAzurermPrivateDnsResolverInboundEndpoint#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_inbound_endpoint

dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_inbound_endpoint

dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_inbound_endpoint

dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.ipConfigurations">ip_configurations</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList">DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference">DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.privateDnsResolverIdInput">private_dns_resolver_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts">DataAzurermPrivateDnsResolverInboundEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.privateDnsResolverId">private_dns_resolver_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `ip_configurations`<sup>Required</sup> <a name="ip_configurations" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.ipConfigurations"></a>

```python
ip_configurations: DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList">DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.timeouts"></a>

```python
timeouts: DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference">DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_dns_resolver_id_input`<sup>Optional</sup> <a name="private_dns_resolver_id_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.privateDnsResolverIdInput"></a>

```python
private_dns_resolver_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermPrivateDnsResolverInboundEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts">DataAzurermPrivateDnsResolverInboundEndpointTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_dns_resolver_id`<sup>Required</sup> <a name="private_dns_resolver_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.privateDnsResolverId"></a>

```python
private_dns_resolver_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsResolverInboundEndpointConfig <a name="DataAzurermPrivateDnsResolverInboundEndpointConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_inbound_endpoint

dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  private_dns_resolver_id: str,
  id: str = None,
  timeouts: DataAzurermPrivateDnsResolverInboundEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#name DataAzurermPrivateDnsResolverInboundEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.privateDnsResolverId">private_dns_resolver_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#private_dns_resolver_id DataAzurermPrivateDnsResolverInboundEndpoint#private_dns_resolver_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#id DataAzurermPrivateDnsResolverInboundEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts">DataAzurermPrivateDnsResolverInboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#name DataAzurermPrivateDnsResolverInboundEndpoint#name}.

---

##### `private_dns_resolver_id`<sup>Required</sup> <a name="private_dns_resolver_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.privateDnsResolverId"></a>

```python
private_dns_resolver_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#private_dns_resolver_id DataAzurermPrivateDnsResolverInboundEndpoint#private_dns_resolver_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#id DataAzurermPrivateDnsResolverInboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointConfig.property.timeouts"></a>

```python
timeouts: DataAzurermPrivateDnsResolverInboundEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts">DataAzurermPrivateDnsResolverInboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#timeouts DataAzurermPrivateDnsResolverInboundEndpoint#timeouts}

---

### DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations <a name="DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_inbound_endpoint

dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations()
```


### DataAzurermPrivateDnsResolverInboundEndpointTimeouts <a name="DataAzurermPrivateDnsResolverInboundEndpointTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_inbound_endpoint

dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#read DataAzurermPrivateDnsResolverInboundEndpoint#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.74.0/docs/data-sources/private_dns_resolver_inbound_endpoint#read DataAzurermPrivateDnsResolverInboundEndpoint#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList <a name="DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_inbound_endpoint

dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference <a name="DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_inbound_endpoint

dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethod">private_ip_allocation_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations">DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `private_ip_allocation_method`<sup>Required</sup> <a name="private_ip_allocation_method" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.privateIpAllocationMethod"></a>

```python
private_ip_allocation_method: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations">DataAzurermPrivateDnsResolverInboundEndpointIpConfigurations</a>

---


### DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference <a name="DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_inbound_endpoint

dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts">DataAzurermPrivateDnsResolverInboundEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermPrivateDnsResolverInboundEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverInboundEndpoint.DataAzurermPrivateDnsResolverInboundEndpointTimeouts">DataAzurermPrivateDnsResolverInboundEndpointTimeouts</a>]

---



