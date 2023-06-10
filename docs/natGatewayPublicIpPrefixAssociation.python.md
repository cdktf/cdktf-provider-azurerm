# `azurerm_nat_gateway_public_ip_prefix_association`

Refer to the Terraform Registory for docs: [`azurerm_nat_gateway_public_ip_prefix_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association).

# `natGatewayPublicIpPrefixAssociation` Submodule <a name="`natGatewayPublicIpPrefixAssociation` Submodule" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NatGatewayPublicIpPrefixAssociation <a name="NatGatewayPublicIpPrefixAssociation" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association azurerm_nat_gateway_public_ip_prefix_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import nat_gateway_public_ip_prefix_association

natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  nat_gateway_id: str,
  public_ip_prefix_id: str,
  id: str = None,
  timeouts: NatGatewayPublicIpPrefixAssociationTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#nat_gateway_id NatGatewayPublicIpPrefixAssociation#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.publicIpPrefixId">public_ip_prefix_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#public_ip_prefix_id NatGatewayPublicIpPrefixAssociation#public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#id NatGatewayPublicIpPrefixAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts">NatGatewayPublicIpPrefixAssociationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `nat_gateway_id`<sup>Required</sup> <a name="nat_gateway_id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.natGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#nat_gateway_id NatGatewayPublicIpPrefixAssociation#nat_gateway_id}.

---

##### `public_ip_prefix_id`<sup>Required</sup> <a name="public_ip_prefix_id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.publicIpPrefixId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#public_ip_prefix_id NatGatewayPublicIpPrefixAssociation#public_ip_prefix_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#id NatGatewayPublicIpPrefixAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts">NatGatewayPublicIpPrefixAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#timeouts NatGatewayPublicIpPrefixAssociation#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#create NatGatewayPublicIpPrefixAssociation#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#delete NatGatewayPublicIpPrefixAssociation#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#read NatGatewayPublicIpPrefixAssociation#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import nat_gateway_public_ip_prefix_association

natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import nat_gateway_public_ip_prefix_association

natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import nat_gateway_public_ip_prefix_association

natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference">NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.natGatewayIdInput">nat_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.publicIpPrefixIdInput">public_ip_prefix_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts">NatGatewayPublicIpPrefixAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.publicIpPrefixId">public_ip_prefix_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.timeouts"></a>

```python
timeouts: NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference">NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `nat_gateway_id_input`<sup>Optional</sup> <a name="nat_gateway_id_input" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.natGatewayIdInput"></a>

```python
nat_gateway_id_input: str
```

- *Type:* str

---

##### `public_ip_prefix_id_input`<sup>Optional</sup> <a name="public_ip_prefix_id_input" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.publicIpPrefixIdInput"></a>

```python
public_ip_prefix_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[NatGatewayPublicIpPrefixAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts">NatGatewayPublicIpPrefixAssociationTimeouts</a>, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `nat_gateway_id`<sup>Required</sup> <a name="nat_gateway_id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

---

##### `public_ip_prefix_id`<sup>Required</sup> <a name="public_ip_prefix_id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.publicIpPrefixId"></a>

```python
public_ip_prefix_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NatGatewayPublicIpPrefixAssociationConfig <a name="NatGatewayPublicIpPrefixAssociationConfig" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import nat_gateway_public_ip_prefix_association

natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  nat_gateway_id: str,
  public_ip_prefix_id: str,
  id: str = None,
  timeouts: NatGatewayPublicIpPrefixAssociationTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.natGatewayId">nat_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#nat_gateway_id NatGatewayPublicIpPrefixAssociation#nat_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.publicIpPrefixId">public_ip_prefix_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#public_ip_prefix_id NatGatewayPublicIpPrefixAssociation#public_ip_prefix_id}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#id NatGatewayPublicIpPrefixAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts">NatGatewayPublicIpPrefixAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `nat_gateway_id`<sup>Required</sup> <a name="nat_gateway_id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.natGatewayId"></a>

```python
nat_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#nat_gateway_id NatGatewayPublicIpPrefixAssociation#nat_gateway_id}.

---

##### `public_ip_prefix_id`<sup>Required</sup> <a name="public_ip_prefix_id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.publicIpPrefixId"></a>

```python
public_ip_prefix_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#public_ip_prefix_id NatGatewayPublicIpPrefixAssociation#public_ip_prefix_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#id NatGatewayPublicIpPrefixAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationConfig.property.timeouts"></a>

```python
timeouts: NatGatewayPublicIpPrefixAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts">NatGatewayPublicIpPrefixAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#timeouts NatGatewayPublicIpPrefixAssociation#timeouts}

---

### NatGatewayPublicIpPrefixAssociationTimeouts <a name="NatGatewayPublicIpPrefixAssociationTimeouts" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import nat_gateway_public_ip_prefix_association

natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#create NatGatewayPublicIpPrefixAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#delete NatGatewayPublicIpPrefixAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#read NatGatewayPublicIpPrefixAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#create NatGatewayPublicIpPrefixAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#delete NatGatewayPublicIpPrefixAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/nat_gateway_public_ip_prefix_association#read NatGatewayPublicIpPrefixAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference <a name="NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import nat_gateway_public_ip_prefix_association

natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts">NatGatewayPublicIpPrefixAssociationTimeouts</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[NatGatewayPublicIpPrefixAssociationTimeouts, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-azurerm.natGatewayPublicIpPrefixAssociation.NatGatewayPublicIpPrefixAssociationTimeouts">NatGatewayPublicIpPrefixAssociationTimeouts</a>, cdktf.IResolvable]

---



