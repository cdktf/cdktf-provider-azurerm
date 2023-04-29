# `azurerm_private_dns_resolver_outbound_endpoint`

Refer to the Terraform Registory for docs: [`azurerm_private_dns_resolver_outbound_endpoint`](https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint).

# `privateDnsResolverOutboundEndpoint` Submodule <a name="`privateDnsResolverOutboundEndpoint` Submodule" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateDnsResolverOutboundEndpoint <a name="PrivateDnsResolverOutboundEndpoint" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint azurerm_private_dns_resolver_outbound_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_outbound_endpoint

privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint(
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
  private_dns_resolver_id: str,
  subnet_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PrivateDnsResolverOutboundEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#location PrivateDnsResolverOutboundEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#name PrivateDnsResolverOutboundEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.privateDnsResolverId">private_dns_resolver_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#private_dns_resolver_id PrivateDnsResolverOutboundEndpoint#private_dns_resolver_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#subnet_id PrivateDnsResolverOutboundEndpoint#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#id PrivateDnsResolverOutboundEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#tags PrivateDnsResolverOutboundEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#location PrivateDnsResolverOutboundEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#name PrivateDnsResolverOutboundEndpoint#name}.

---

##### `private_dns_resolver_id`<sup>Required</sup> <a name="private_dns_resolver_id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.privateDnsResolverId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#private_dns_resolver_id PrivateDnsResolverOutboundEndpoint#private_dns_resolver_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#subnet_id PrivateDnsResolverOutboundEndpoint#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#id PrivateDnsResolverOutboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#tags PrivateDnsResolverOutboundEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#timeouts PrivateDnsResolverOutboundEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#create PrivateDnsResolverOutboundEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#delete PrivateDnsResolverOutboundEndpoint#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#read PrivateDnsResolverOutboundEndpoint#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#update PrivateDnsResolverOutboundEndpoint#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_outbound_endpoint

privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_outbound_endpoint

privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_outbound_endpoint

privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference">PrivateDnsResolverOutboundEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.privateDnsResolverIdInput">private_dns_resolver_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.privateDnsResolverId">private_dns_resolver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.timeouts"></a>

```python
timeouts: PrivateDnsResolverOutboundEndpointTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference">PrivateDnsResolverOutboundEndpointTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `private_dns_resolver_id_input`<sup>Optional</sup> <a name="private_dns_resolver_id_input" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.privateDnsResolverIdInput"></a>

```python
private_dns_resolver_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[PrivateDnsResolverOutboundEndpointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `private_dns_resolver_id`<sup>Required</sup> <a name="private_dns_resolver_id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.privateDnsResolverId"></a>

```python
private_dns_resolver_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateDnsResolverOutboundEndpointConfig <a name="PrivateDnsResolverOutboundEndpointConfig" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_outbound_endpoint

privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  private_dns_resolver_id: str,
  subnet_id: str,
  id: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: PrivateDnsResolverOutboundEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#location PrivateDnsResolverOutboundEndpoint#location}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#name PrivateDnsResolverOutboundEndpoint#name}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.privateDnsResolverId">private_dns_resolver_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#private_dns_resolver_id PrivateDnsResolverOutboundEndpoint#private_dns_resolver_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#subnet_id PrivateDnsResolverOutboundEndpoint#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#id PrivateDnsResolverOutboundEndpoint#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#tags PrivateDnsResolverOutboundEndpoint#tags}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#location PrivateDnsResolverOutboundEndpoint#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#name PrivateDnsResolverOutboundEndpoint#name}.

---

##### `private_dns_resolver_id`<sup>Required</sup> <a name="private_dns_resolver_id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.privateDnsResolverId"></a>

```python
private_dns_resolver_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#private_dns_resolver_id PrivateDnsResolverOutboundEndpoint#private_dns_resolver_id}.

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#subnet_id PrivateDnsResolverOutboundEndpoint#subnet_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#id PrivateDnsResolverOutboundEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#tags PrivateDnsResolverOutboundEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointConfig.property.timeouts"></a>

```python
timeouts: PrivateDnsResolverOutboundEndpointTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#timeouts PrivateDnsResolverOutboundEndpoint#timeouts}

---

### PrivateDnsResolverOutboundEndpointTimeouts <a name="PrivateDnsResolverOutboundEndpointTimeouts" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_outbound_endpoint

privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#create PrivateDnsResolverOutboundEndpoint#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#delete PrivateDnsResolverOutboundEndpoint#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#read PrivateDnsResolverOutboundEndpoint#read}. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#update PrivateDnsResolverOutboundEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#create PrivateDnsResolverOutboundEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#delete PrivateDnsResolverOutboundEndpoint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#read PrivateDnsResolverOutboundEndpoint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.54.0/docs/resources/private_dns_resolver_outbound_endpoint#update PrivateDnsResolverOutboundEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateDnsResolverOutboundEndpointTimeoutsOutputReference <a name="PrivateDnsResolverOutboundEndpointTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import private_dns_resolver_outbound_endpoint

privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[PrivateDnsResolverOutboundEndpointTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.privateDnsResolverOutboundEndpoint.PrivateDnsResolverOutboundEndpointTimeouts">PrivateDnsResolverOutboundEndpointTimeouts</a>, cdktf.IResolvable]

---



