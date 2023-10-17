# `azurerm_postgresql_virtual_network_rule`

Refer to the Terraform Registory for docs: [`azurerm_postgresql_virtual_network_rule`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule).

# `postgresqlVirtualNetworkRule` Submodule <a name="`postgresqlVirtualNetworkRule` Submodule" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PostgresqlVirtualNetworkRule <a name="PostgresqlVirtualNetworkRule" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule azurerm_postgresql_virtual_network_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlVirtualNetworkRule(Construct Scope, string Id, PostgresqlVirtualNetworkRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig">PostgresqlVirtualNetworkRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig">PostgresqlVirtualNetworkRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.resetIgnoreMissingVnetServiceEndpoint">ResetIgnoreMissingVnetServiceEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.putTimeouts"></a>

```csharp
private void PutTimeouts(PostgresqlVirtualNetworkRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts">PostgresqlVirtualNetworkRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIgnoreMissingVnetServiceEndpoint` <a name="ResetIgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.resetIgnoreMissingVnetServiceEndpoint"></a>

```csharp
private void ResetIgnoreMissingVnetServiceEndpoint()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PostgresqlVirtualNetworkRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PostgresqlVirtualNetworkRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PostgresqlVirtualNetworkRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PostgresqlVirtualNetworkRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

PostgresqlVirtualNetworkRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a PostgresqlVirtualNetworkRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PostgresqlVirtualNetworkRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PostgresqlVirtualNetworkRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the PostgresqlVirtualNetworkRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference">PostgresqlVirtualNetworkRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpointInput">IgnoreMissingVnetServiceEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.serverNameInput">ServerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.serverName">ServerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.timeouts"></a>

```csharp
public PostgresqlVirtualNetworkRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference">PostgresqlVirtualNetworkRuleTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IgnoreMissingVnetServiceEndpointInput`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpointInput" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpointInput"></a>

```csharp
public object IgnoreMissingVnetServiceEndpointInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.serverNameInput"></a>

```csharp
public string ServerNameInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Required</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.ignoreMissingVnetServiceEndpoint"></a>

```csharp
public object IgnoreMissingVnetServiceEndpoint { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.serverName"></a>

```csharp
public string ServerName { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PostgresqlVirtualNetworkRuleConfig <a name="PostgresqlVirtualNetworkRuleConfig" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlVirtualNetworkRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string ServerName,
    string SubnetId,
    string Id = null,
    object IgnoreMissingVnetServiceEndpoint = null,
    PostgresqlVirtualNetworkRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#name PostgresqlVirtualNetworkRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#resource_group_name PostgresqlVirtualNetworkRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.serverName">ServerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#server_name PostgresqlVirtualNetworkRule#server_name}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#subnet_id PostgresqlVirtualNetworkRule#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#id PostgresqlVirtualNetworkRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.ignoreMissingVnetServiceEndpoint">IgnoreMissingVnetServiceEndpoint</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#ignore_missing_vnet_service_endpoint PostgresqlVirtualNetworkRule#ignore_missing_vnet_service_endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts">PostgresqlVirtualNetworkRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#name PostgresqlVirtualNetworkRule#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#resource_group_name PostgresqlVirtualNetworkRule#resource_group_name}.

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.serverName"></a>

```csharp
public string ServerName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#server_name PostgresqlVirtualNetworkRule#server_name}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#subnet_id PostgresqlVirtualNetworkRule#subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#id PostgresqlVirtualNetworkRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreMissingVnetServiceEndpoint`<sup>Optional</sup> <a name="IgnoreMissingVnetServiceEndpoint" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.ignoreMissingVnetServiceEndpoint"></a>

```csharp
public object IgnoreMissingVnetServiceEndpoint { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#ignore_missing_vnet_service_endpoint PostgresqlVirtualNetworkRule#ignore_missing_vnet_service_endpoint}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleConfig.property.timeouts"></a>

```csharp
public PostgresqlVirtualNetworkRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts">PostgresqlVirtualNetworkRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#timeouts PostgresqlVirtualNetworkRule#timeouts}

---

### PostgresqlVirtualNetworkRuleTimeouts <a name="PostgresqlVirtualNetworkRuleTimeouts" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlVirtualNetworkRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#create PostgresqlVirtualNetworkRule#create}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#delete PostgresqlVirtualNetworkRule#delete}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#read PostgresqlVirtualNetworkRule#read}. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#update PostgresqlVirtualNetworkRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#create PostgresqlVirtualNetworkRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#delete PostgresqlVirtualNetworkRule#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#read PostgresqlVirtualNetworkRule#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/postgresql_virtual_network_rule#update PostgresqlVirtualNetworkRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PostgresqlVirtualNetworkRuleTimeoutsOutputReference <a name="PostgresqlVirtualNetworkRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new PostgresqlVirtualNetworkRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.postgresqlVirtualNetworkRule.PostgresqlVirtualNetworkRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



