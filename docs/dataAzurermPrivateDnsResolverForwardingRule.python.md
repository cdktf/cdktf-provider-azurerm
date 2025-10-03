# `dataAzurermPrivateDnsResolverForwardingRule` Submodule <a name="`dataAzurermPrivateDnsResolverForwardingRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermPrivateDnsResolverForwardingRule <a name="DataAzurermPrivateDnsResolverForwardingRule" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule azurerm_private_dns_resolver_forwarding_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_forwarding_rule

dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_forwarding_ruleset_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermPrivateDnsResolverForwardingRuleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.dnsForwardingRulesetId">dns_forwarding_ruleset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id DataAzurermPrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#name DataAzurermPrivateDnsResolverForwardingRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#id DataAzurermPrivateDnsResolverForwardingRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts">DataAzurermPrivateDnsResolverForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_forwarding_ruleset_id`<sup>Required</sup> <a name="dns_forwarding_ruleset_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.dnsForwardingRulesetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id DataAzurermPrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#name DataAzurermPrivateDnsResolverForwardingRule#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#id DataAzurermPrivateDnsResolverForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts">DataAzurermPrivateDnsResolverForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#timeouts DataAzurermPrivateDnsResolverForwardingRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.putTimeouts"></a>

```python
def put_timeouts(
  read: str = None
) -> None
```

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#read DataAzurermPrivateDnsResolverForwardingRule#read}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAzurermPrivateDnsResolverForwardingRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_forwarding_rule

dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_forwarding_rule

dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_forwarding_rule

dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_forwarding_rule

dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAzurermPrivateDnsResolverForwardingRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAzurermPrivateDnsResolverForwardingRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAzurermPrivateDnsResolverForwardingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermPrivateDnsResolverForwardingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.targetDnsServers">target_dns_servers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList">DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference">DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.dnsForwardingRulesetIdInput">dns_forwarding_ruleset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts">DataAzurermPrivateDnsResolverForwardingRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.dnsForwardingRulesetId">dns_forwarding_ruleset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.metadata"></a>

```python
metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_dns_servers`<sup>Required</sup> <a name="target_dns_servers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.targetDnsServers"></a>

```python
target_dns_servers: DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList">DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.timeouts"></a>

```python
timeouts: DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference">DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference</a>

---

##### `dns_forwarding_ruleset_id_input`<sup>Optional</sup> <a name="dns_forwarding_ruleset_id_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.dnsForwardingRulesetIdInput"></a>

```python
dns_forwarding_ruleset_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataAzurermPrivateDnsResolverForwardingRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts">DataAzurermPrivateDnsResolverForwardingRuleTimeouts</a>]

---

##### `dns_forwarding_ruleset_id`<sup>Required</sup> <a name="dns_forwarding_ruleset_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.dnsForwardingRulesetId"></a>

```python
dns_forwarding_ruleset_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermPrivateDnsResolverForwardingRuleConfig <a name="DataAzurermPrivateDnsResolverForwardingRuleConfig" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_forwarding_rule

dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  dns_forwarding_ruleset_id: str,
  name: str,
  id: str = None,
  timeouts: DataAzurermPrivateDnsResolverForwardingRuleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.dnsForwardingRulesetId">dns_forwarding_ruleset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id DataAzurermPrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#name DataAzurermPrivateDnsResolverForwardingRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#id DataAzurermPrivateDnsResolverForwardingRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts">DataAzurermPrivateDnsResolverForwardingRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_forwarding_ruleset_id`<sup>Required</sup> <a name="dns_forwarding_ruleset_id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.dnsForwardingRulesetId"></a>

```python
dns_forwarding_ruleset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#dns_forwarding_ruleset_id DataAzurermPrivateDnsResolverForwardingRule#dns_forwarding_ruleset_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#name DataAzurermPrivateDnsResolverForwardingRule#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#id DataAzurermPrivateDnsResolverForwardingRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleConfig.property.timeouts"></a>

```python
timeouts: DataAzurermPrivateDnsResolverForwardingRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts">DataAzurermPrivateDnsResolverForwardingRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#timeouts DataAzurermPrivateDnsResolverForwardingRule#timeouts}

---

### DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServers <a name="DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServers.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_forwarding_rule

dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServers()
```


### DataAzurermPrivateDnsResolverForwardingRuleTimeouts <a name="DataAzurermPrivateDnsResolverForwardingRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_forwarding_rule

dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts(
  read: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#read DataAzurermPrivateDnsResolverForwardingRule#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/data-sources/private_dns_resolver_forwarding_rule#read DataAzurermPrivateDnsResolverForwardingRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList <a name="DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_forwarding_rule

dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference <a name="DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_forwarding_rule

dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServers">DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServersOutputReference.property.internalValue"></a>

```python
internal_value: DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServers
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServers">DataAzurermPrivateDnsResolverForwardingRuleTargetDnsServers</a>

---


### DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference <a name="DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import data_azurerm_private_dns_resolver_forwarding_rule

dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts">DataAzurermPrivateDnsResolverForwardingRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAzurermPrivateDnsResolverForwardingRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.dataAzurermPrivateDnsResolverForwardingRule.DataAzurermPrivateDnsResolverForwardingRuleTimeouts">DataAzurermPrivateDnsResolverForwardingRuleTimeouts</a>]

---



