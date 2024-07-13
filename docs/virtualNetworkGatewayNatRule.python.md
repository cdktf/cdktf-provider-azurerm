# `virtualNetworkGatewayNatRule` Submodule <a name="`virtualNetworkGatewayNatRule` Submodule" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VirtualNetworkGatewayNatRule <a name="VirtualNetworkGatewayNatRule" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule azurerm_virtual_network_gateway_nat_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_mapping: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleExternalMapping]],
  internal_mapping: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleInternalMapping]],
  name: str,
  resource_group_name: str,
  virtual_network_gateway_id: str,
  id: str = None,
  ip_configuration_id: str = None,
  mode: str = None,
  timeouts: VirtualNetworkGatewayNatRuleTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.externalMapping">external_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>]]</code> | external_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.internalMapping">internal_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>]]</code> | internal_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#name VirtualNetworkGatewayNatRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#resource_group_name VirtualNetworkGatewayNatRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.virtualNetworkGatewayId">virtual_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#virtual_network_gateway_id VirtualNetworkGatewayNatRule#virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#id VirtualNetworkGatewayNatRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.ipConfigurationId">ip_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#ip_configuration_id VirtualNetworkGatewayNatRule#ip_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#mode VirtualNetworkGatewayNatRule#mode}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#type VirtualNetworkGatewayNatRule#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_mapping`<sup>Required</sup> <a name="external_mapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.externalMapping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>]]

external_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#external_mapping VirtualNetworkGatewayNatRule#external_mapping}

---

##### `internal_mapping`<sup>Required</sup> <a name="internal_mapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.internalMapping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>]]

internal_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#internal_mapping VirtualNetworkGatewayNatRule#internal_mapping}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#name VirtualNetworkGatewayNatRule#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#resource_group_name VirtualNetworkGatewayNatRule#resource_group_name}.

---

##### `virtual_network_gateway_id`<sup>Required</sup> <a name="virtual_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.virtualNetworkGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#virtual_network_gateway_id VirtualNetworkGatewayNatRule#virtual_network_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#id VirtualNetworkGatewayNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_configuration_id`<sup>Optional</sup> <a name="ip_configuration_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.ipConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#ip_configuration_id VirtualNetworkGatewayNatRule#ip_configuration_id}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#mode VirtualNetworkGatewayNatRule#mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#timeouts VirtualNetworkGatewayNatRule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#type VirtualNetworkGatewayNatRule#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putExternalMapping">put_external_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putInternalMapping">put_internal_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetIpConfigurationId">reset_ip_configuration_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_external_mapping` <a name="put_external_mapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putExternalMapping"></a>

```python
def put_external_mapping(
  value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleExternalMapping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putExternalMapping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>]]

---

##### `put_internal_mapping` <a name="put_internal_mapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putInternalMapping"></a>

```python
def put_internal_mapping(
  value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleInternalMapping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putInternalMapping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#create VirtualNetworkGatewayNatRule#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#delete VirtualNetworkGatewayNatRule#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#read VirtualNetworkGatewayNatRule#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#update VirtualNetworkGatewayNatRule#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_configuration_id` <a name="reset_ip_configuration_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetIpConfigurationId"></a>

```python
def reset_ip_configuration_id() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VirtualNetworkGatewayNatRule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VirtualNetworkGatewayNatRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VirtualNetworkGatewayNatRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VirtualNetworkGatewayNatRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VirtualNetworkGatewayNatRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMapping">external_mapping</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList">VirtualNetworkGatewayNatRuleExternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMapping">internal_mapping</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList">VirtualNetworkGatewayNatRuleInternalMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference">VirtualNetworkGatewayNatRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMappingInput">external_mapping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMappingInput">internal_mapping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationIdInput">ip_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupNameInput">resource_group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayIdInput">virtual_network_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationId">ip_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayId">virtual_network_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_mapping`<sup>Required</sup> <a name="external_mapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMapping"></a>

```python
external_mapping: VirtualNetworkGatewayNatRuleExternalMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList">VirtualNetworkGatewayNatRuleExternalMappingList</a>

---

##### `internal_mapping`<sup>Required</sup> <a name="internal_mapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMapping"></a>

```python
internal_mapping: VirtualNetworkGatewayNatRuleInternalMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList">VirtualNetworkGatewayNatRuleInternalMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeouts"></a>

```python
timeouts: VirtualNetworkGatewayNatRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference">VirtualNetworkGatewayNatRuleTimeoutsOutputReference</a>

---

##### `external_mapping_input`<sup>Optional</sup> <a name="external_mapping_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.externalMappingInput"></a>

```python
external_mapping_input: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleExternalMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internal_mapping_input`<sup>Optional</sup> <a name="internal_mapping_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.internalMappingInput"></a>

```python
internal_mapping_input: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleInternalMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>]]

---

##### `ip_configuration_id_input`<sup>Optional</sup> <a name="ip_configuration_id_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationIdInput"></a>

```python
ip_configuration_id_input: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_name_input`<sup>Optional</sup> <a name="resource_group_name_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupNameInput"></a>

```python
resource_group_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, VirtualNetworkGatewayNatRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `virtual_network_gateway_id_input`<sup>Optional</sup> <a name="virtual_network_gateway_id_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayIdInput"></a>

```python
virtual_network_gateway_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_configuration_id`<sup>Required</sup> <a name="ip_configuration_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.ipConfigurationId"></a>

```python
ip_configuration_id: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `virtual_network_gateway_id`<sup>Required</sup> <a name="virtual_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.virtualNetworkGatewayId"></a>

```python
virtual_network_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VirtualNetworkGatewayNatRuleConfig <a name="VirtualNetworkGatewayNatRuleConfig" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  external_mapping: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleExternalMapping]],
  internal_mapping: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleInternalMapping]],
  name: str,
  resource_group_name: str,
  virtual_network_gateway_id: str,
  id: str = None,
  ip_configuration_id: str = None,
  mode: str = None,
  timeouts: VirtualNetworkGatewayNatRuleTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.externalMapping">external_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>]]</code> | external_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.internalMapping">internal_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>]]</code> | internal_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#name VirtualNetworkGatewayNatRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.resourceGroupName">resource_group_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#resource_group_name VirtualNetworkGatewayNatRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.virtualNetworkGatewayId">virtual_network_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#virtual_network_gateway_id VirtualNetworkGatewayNatRule#virtual_network_gateway_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#id VirtualNetworkGatewayNatRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.ipConfigurationId">ip_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#ip_configuration_id VirtualNetworkGatewayNatRule#ip_configuration_id}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#mode VirtualNetworkGatewayNatRule#mode}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#type VirtualNetworkGatewayNatRule#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `external_mapping`<sup>Required</sup> <a name="external_mapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.externalMapping"></a>

```python
external_mapping: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleExternalMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>]]

external_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#external_mapping VirtualNetworkGatewayNatRule#external_mapping}

---

##### `internal_mapping`<sup>Required</sup> <a name="internal_mapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.internalMapping"></a>

```python
internal_mapping: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleInternalMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>]]

internal_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#internal_mapping VirtualNetworkGatewayNatRule#internal_mapping}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#name VirtualNetworkGatewayNatRule#name}.

---

##### `resource_group_name`<sup>Required</sup> <a name="resource_group_name" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.resourceGroupName"></a>

```python
resource_group_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#resource_group_name VirtualNetworkGatewayNatRule#resource_group_name}.

---

##### `virtual_network_gateway_id`<sup>Required</sup> <a name="virtual_network_gateway_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.virtualNetworkGatewayId"></a>

```python
virtual_network_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#virtual_network_gateway_id VirtualNetworkGatewayNatRule#virtual_network_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#id VirtualNetworkGatewayNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_configuration_id`<sup>Optional</sup> <a name="ip_configuration_id" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.ipConfigurationId"></a>

```python
ip_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#ip_configuration_id VirtualNetworkGatewayNatRule#ip_configuration_id}.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#mode VirtualNetworkGatewayNatRule#mode}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.timeouts"></a>

```python
timeouts: VirtualNetworkGatewayNatRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#timeouts VirtualNetworkGatewayNatRule#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#type VirtualNetworkGatewayNatRule#type}.

---

### VirtualNetworkGatewayNatRuleExternalMapping <a name="VirtualNetworkGatewayNatRuleExternalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping(
  address_space: str,
  port_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.addressSpace">address_space</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.portRange">port_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}. |

---

##### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.addressSpace"></a>

```python
address_space: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}.

---

##### `port_range`<sup>Optional</sup> <a name="port_range" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping.property.portRange"></a>

```python
port_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}.

---

### VirtualNetworkGatewayNatRuleInternalMapping <a name="VirtualNetworkGatewayNatRuleInternalMapping" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping(
  address_space: str,
  port_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.addressSpace">address_space</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.portRange">port_range</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}. |

---

##### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.addressSpace"></a>

```python
address_space: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#address_space VirtualNetworkGatewayNatRule#address_space}.

---

##### `port_range`<sup>Optional</sup> <a name="port_range" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping.property.portRange"></a>

```python
port_range: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#port_range VirtualNetworkGatewayNatRule#port_range}.

---

### VirtualNetworkGatewayNatRuleTimeouts <a name="VirtualNetworkGatewayNatRuleTimeouts" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#create VirtualNetworkGatewayNatRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#delete VirtualNetworkGatewayNatRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#read VirtualNetworkGatewayNatRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#update VirtualNetworkGatewayNatRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#create VirtualNetworkGatewayNatRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#delete VirtualNetworkGatewayNatRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#read VirtualNetworkGatewayNatRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.112.0/docs/resources/virtual_network_gateway_nat_rule#update VirtualNetworkGatewayNatRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VirtualNetworkGatewayNatRuleExternalMappingList <a name="VirtualNetworkGatewayNatRuleExternalMappingList" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualNetworkGatewayNatRuleExternalMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleExternalMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>]]

---


### VirtualNetworkGatewayNatRuleExternalMappingOutputReference <a name="VirtualNetworkGatewayNatRuleExternalMappingOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resetPortRange">reset_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port_range` <a name="reset_port_range" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.resetPortRange"></a>

```python
def reset_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput">address_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRangeInput">port_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpace">address_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRange">port_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_space_input`<sup>Optional</sup> <a name="address_space_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpaceInput"></a>

```python
address_space_input: str
```

- *Type:* str

---

##### `port_range_input`<sup>Optional</sup> <a name="port_range_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRangeInput"></a>

```python
port_range_input: str
```

- *Type:* str

---

##### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.addressSpace"></a>

```python
address_space: str
```

- *Type:* str

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.portRange"></a>

```python
port_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMappingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualNetworkGatewayNatRuleExternalMapping]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleExternalMapping">VirtualNetworkGatewayNatRuleExternalMapping</a>]

---


### VirtualNetworkGatewayNatRuleInternalMappingList <a name="VirtualNetworkGatewayNatRuleInternalMappingList" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VirtualNetworkGatewayNatRuleInternalMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[VirtualNetworkGatewayNatRuleInternalMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>]]

---


### VirtualNetworkGatewayNatRuleInternalMappingOutputReference <a name="VirtualNetworkGatewayNatRuleInternalMappingOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resetPortRange">reset_port_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port_range` <a name="reset_port_range" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.resetPortRange"></a>

```python
def reset_port_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput">address_space_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRangeInput">port_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpace">address_space</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRange">port_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_space_input`<sup>Optional</sup> <a name="address_space_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpaceInput"></a>

```python
address_space_input: str
```

- *Type:* str

---

##### `port_range_input`<sup>Optional</sup> <a name="port_range_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRangeInput"></a>

```python
port_range_input: str
```

- *Type:* str

---

##### `address_space`<sup>Required</sup> <a name="address_space" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.addressSpace"></a>

```python
address_space: str
```

- *Type:* str

---

##### `port_range`<sup>Required</sup> <a name="port_range" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.portRange"></a>

```python
port_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMappingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualNetworkGatewayNatRuleInternalMapping]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleInternalMapping">VirtualNetworkGatewayNatRuleInternalMapping</a>]

---


### VirtualNetworkGatewayNatRuleTimeoutsOutputReference <a name="VirtualNetworkGatewayNatRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_azurerm import virtual_network_gateway_nat_rule

virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, VirtualNetworkGatewayNatRuleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-azurerm.virtualNetworkGatewayNatRule.VirtualNetworkGatewayNatRuleTimeouts">VirtualNetworkGatewayNatRuleTimeouts</a>]

---



