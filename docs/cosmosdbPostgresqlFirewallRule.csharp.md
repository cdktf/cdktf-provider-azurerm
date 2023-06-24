# `azurerm_cosmosdb_postgresql_firewall_rule`

Refer to the Terraform Registory for docs: [`azurerm_cosmosdb_postgresql_firewall_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule).

# `cosmosdbPostgresqlFirewallRule` Submodule <a name="`cosmosdbPostgresqlFirewallRule` Submodule" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbPostgresqlFirewallRule <a name="CosmosdbPostgresqlFirewallRule" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule azurerm_cosmosdb_postgresql_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbPostgresqlFirewallRule(Construct Scope, string Id, CosmosdbPostgresqlFirewallRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig">CosmosdbPostgresqlFirewallRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig">CosmosdbPostgresqlFirewallRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts"></a>

```csharp
private void PutTimeouts(CosmosdbPostgresqlFirewallRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbPostgresqlFirewallRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbPostgresqlFirewallRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbPostgresqlFirewallRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference">CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddressInput">EndIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddressInput">StartIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddress">EndIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddress">StartIpAddress</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeouts"></a>

```csharp
public CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference">CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `EndIpAddressInput`<sup>Optional</sup> <a name="EndIpAddressInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddressInput"></a>

```csharp
public string EndIpAddressInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StartIpAddressInput`<sup>Optional</sup> <a name="StartIpAddressInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddressInput"></a>

```csharp
public string StartIpAddressInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `EndIpAddress`<sup>Required</sup> <a name="EndIpAddress" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.endIpAddress"></a>

```csharp
public string EndIpAddress { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartIpAddress`<sup>Required</sup> <a name="StartIpAddress" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.startIpAddress"></a>

```csharp
public string StartIpAddress { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbPostgresqlFirewallRuleConfig <a name="CosmosdbPostgresqlFirewallRuleConfig" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbPostgresqlFirewallRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string EndIpAddress,
    string Name,
    string StartIpAddress,
    string Id = null,
    CosmosdbPostgresqlFirewallRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#cluster_id CosmosdbPostgresqlFirewallRule#cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.endIpAddress">EndIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#end_ip_address CosmosdbPostgresqlFirewallRule#end_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#name CosmosdbPostgresqlFirewallRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.startIpAddress">StartIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#start_ip_address CosmosdbPostgresqlFirewallRule#start_ip_address}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#id CosmosdbPostgresqlFirewallRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#cluster_id CosmosdbPostgresqlFirewallRule#cluster_id}.

---

##### `EndIpAddress`<sup>Required</sup> <a name="EndIpAddress" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.endIpAddress"></a>

```csharp
public string EndIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#end_ip_address CosmosdbPostgresqlFirewallRule#end_ip_address}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#name CosmosdbPostgresqlFirewallRule#name}.

---

##### `StartIpAddress`<sup>Required</sup> <a name="StartIpAddress" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.startIpAddress"></a>

```csharp
public string StartIpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#start_ip_address CosmosdbPostgresqlFirewallRule#start_ip_address}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#id CosmosdbPostgresqlFirewallRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleConfig.property.timeouts"></a>

```csharp
public CosmosdbPostgresqlFirewallRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts">CosmosdbPostgresqlFirewallRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#timeouts CosmosdbPostgresqlFirewallRule#timeouts}

---

### CosmosdbPostgresqlFirewallRuleTimeouts <a name="CosmosdbPostgresqlFirewallRuleTimeouts" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbPostgresqlFirewallRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#create CosmosdbPostgresqlFirewallRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#delete CosmosdbPostgresqlFirewallRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#read CosmosdbPostgresqlFirewallRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#update CosmosdbPostgresqlFirewallRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#create CosmosdbPostgresqlFirewallRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#delete CosmosdbPostgresqlFirewallRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#read CosmosdbPostgresqlFirewallRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/cosmosdb_postgresql_firewall_rule#update CosmosdbPostgresqlFirewallRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference <a name="CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbPostgresqlFirewallRule.CosmosdbPostgresqlFirewallRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



