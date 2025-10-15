# `dataAzurermPrivateDnsResolverDnsForwardingRuleset` Submodule <a name="`dataAzurermPrivateDnsResolverDnsForwardingRuleset` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsResolverDnsForwardingRuleset <a name="DataAzurermPrivateDnsResolverDnsForwardingRuleset" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset azurerm_private_dns_resolver_dns_forwarding_ruleset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_dns_forwarding_ruleset

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#name DataAzurermPrivateDnsResolverDnsForwardingRuleset#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name DataAzurermPrivateDnsResolverDnsForwardingRuleset#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#id DataAzurermPrivateDnsResolverDnsForwardingRuleset#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#name DataAzurermPrivateDnsResolverDnsForwardingRuleset#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name DataAzurermPrivateDnsResolverDnsForwardingRuleset#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#id DataAzurermPrivateDnsResolverDnsForwardingRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#timeouts DataAzurermPrivateDnsResolverDnsForwardingRuleset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#read DataAzurermPrivateDnsResolverDnsForwardingRuleset#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermPrivateDnsResolverDnsForwardingRuleset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_dns_forwarding_ruleset

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_dns_forwarding_ruleset

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_dns_forwarding_ruleset

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_dns_forwarding_ruleset

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermPrivateDnsResolverDnsForwardingRuleset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermPrivateDnsResolverDnsForwardingRuleset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermPrivateDnsResolverDnsForwardingRuleset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsResolverDnsForwardingRuleset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds">private_dns_resolver_outbound_endpoint_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `private_dns_resolver_outbound_endpoint_ids`<sup>Required</sup> <a name="private_dns_resolver_outbound_endpoint_ids" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.privateDnsResolverOutboundEndpointIds"></a>

```python
private_dns_resolver_outbound_endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.timeouts"></a>

```python
timeouts: DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRuleset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig <a name="DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_dns_forwarding_ruleset

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  name: str,
  resource_group_name: str,
  id: str = None,
  timeouts: DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#name DataAzurermPrivateDnsResolverDnsForwardingRuleset#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name DataAzurermPrivateDnsResolverDnsForwardingRuleset#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#id DataAzurermPrivateDnsResolverDnsForwardingRuleset#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#name DataAzurermPrivateDnsResolverDnsForwardingRuleset#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#resource_group_name DataAzurermPrivateDnsResolverDnsForwardingRuleset#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#id DataAzurermPrivateDnsResolverDnsForwardingRuleset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetConfig.property.timeouts"></a>

```python
timeouts: DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#timeouts DataAzurermPrivateDnsResolverDnsForwardingRuleset#timeouts}

---

### DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts <a name="DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_dns_forwarding_ruleset

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#read DataAzurermPrivateDnsResolverDnsForwardingRuleset#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/data-sources/private_dns_resolver_dns_forwarding_ruleset#read DataAzurermPrivateDnsResolverDnsForwardingRuleset#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference <a name="DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_dns_forwarding_ruleset

dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverDnsForwardingRuleset.DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts">DataAzurermPrivateDnsResolverDnsForwardingRulesetTimeouts</a>

---



