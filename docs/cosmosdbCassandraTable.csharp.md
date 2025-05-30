# `cosmosdbCassandraTable` Submodule <a name="`cosmosdbCassandraTable` Submodule" id="@cdktf/provider-azurerm.cosmosdbCassandraTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CosmosdbCassandraTable <a name="CosmosdbCassandraTable" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table azurerm_cosmosdb_cassandra_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTable(Construct Scope, string Id, CosmosdbCassandraTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig">CosmosdbCassandraTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig">CosmosdbCassandraTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.putAutoscaleSettings">PutAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetAnalyticalStorageTtl">ResetAnalyticalStorageTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetAutoscaleSettings">ResetAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetDefaultTtl">ResetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetThroughput">ResetThroughput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoscaleSettings` <a name="PutAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.putAutoscaleSettings"></a>

```csharp
private void PutAutoscaleSettings(CosmosdbCassandraTableAutoscaleSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.putAutoscaleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettings">CosmosdbCassandraTableAutoscaleSettings</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.putSchema"></a>

```csharp
private void PutSchema(CosmosdbCassandraTableSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema">CosmosdbCassandraTableSchema</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.putTimeouts"></a>

```csharp
private void PutTimeouts(CosmosdbCassandraTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts">CosmosdbCassandraTableTimeouts</a>

---

##### `ResetAnalyticalStorageTtl` <a name="ResetAnalyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetAnalyticalStorageTtl"></a>

```csharp
private void ResetAnalyticalStorageTtl()
```

##### `ResetAutoscaleSettings` <a name="ResetAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetAutoscaleSettings"></a>

```csharp
private void ResetAutoscaleSettings()
```

##### `ResetDefaultTtl` <a name="ResetDefaultTtl" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetDefaultTtl"></a>

```csharp
private void ResetDefaultTtl()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetThroughput` <a name="ResetThroughput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetThroughput"></a>

```csharp
private void ResetThroughput()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CosmosdbCassandraTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbCassandraTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbCassandraTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbCassandraTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

CosmosdbCassandraTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CosmosdbCassandraTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CosmosdbCassandraTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CosmosdbCassandraTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CosmosdbCassandraTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.autoscaleSettings">AutoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference">CosmosdbCassandraTableAutoscaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference">CosmosdbCassandraTableSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference">CosmosdbCassandraTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.analyticalStorageTtlInput">AnalyticalStorageTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.autoscaleSettingsInput">AutoscaleSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettings">CosmosdbCassandraTableAutoscaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.cassandraKeyspaceIdInput">CassandraKeyspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.defaultTtlInput">DefaultTtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema">CosmosdbCassandraTableSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.throughputInput">ThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.analyticalStorageTtl">AnalyticalStorageTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.cassandraKeyspaceId">CassandraKeyspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.throughput">Throughput</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AutoscaleSettings`<sup>Required</sup> <a name="AutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.autoscaleSettings"></a>

```csharp
public CosmosdbCassandraTableAutoscaleSettingsOutputReference AutoscaleSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference">CosmosdbCassandraTableAutoscaleSettingsOutputReference</a>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.schema"></a>

```csharp
public CosmosdbCassandraTableSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference">CosmosdbCassandraTableSchemaOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.timeouts"></a>

```csharp
public CosmosdbCassandraTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference">CosmosdbCassandraTableTimeoutsOutputReference</a>

---

##### `AnalyticalStorageTtlInput`<sup>Optional</sup> <a name="AnalyticalStorageTtlInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.analyticalStorageTtlInput"></a>

```csharp
public double AnalyticalStorageTtlInput { get; }
```

- *Type:* double

---

##### `AutoscaleSettingsInput`<sup>Optional</sup> <a name="AutoscaleSettingsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.autoscaleSettingsInput"></a>

```csharp
public CosmosdbCassandraTableAutoscaleSettings AutoscaleSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettings">CosmosdbCassandraTableAutoscaleSettings</a>

---

##### `CassandraKeyspaceIdInput`<sup>Optional</sup> <a name="CassandraKeyspaceIdInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.cassandraKeyspaceIdInput"></a>

```csharp
public string CassandraKeyspaceIdInput { get; }
```

- *Type:* string

---

##### `DefaultTtlInput`<sup>Optional</sup> <a name="DefaultTtlInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.defaultTtlInput"></a>

```csharp
public double DefaultTtlInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.schemaInput"></a>

```csharp
public CosmosdbCassandraTableSchema SchemaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema">CosmosdbCassandraTableSchema</a>

---

##### `ThroughputInput`<sup>Optional</sup> <a name="ThroughputInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.throughputInput"></a>

```csharp
public double ThroughputInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AnalyticalStorageTtl`<sup>Required</sup> <a name="AnalyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.analyticalStorageTtl"></a>

```csharp
public double AnalyticalStorageTtl { get; }
```

- *Type:* double

---

##### `CassandraKeyspaceId`<sup>Required</sup> <a name="CassandraKeyspaceId" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.cassandraKeyspaceId"></a>

```csharp
public string CassandraKeyspaceId { get; }
```

- *Type:* string

---

##### `DefaultTtl`<sup>Required</sup> <a name="DefaultTtl" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Throughput`<sup>Required</sup> <a name="Throughput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.throughput"></a>

```csharp
public double Throughput { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CosmosdbCassandraTableAutoscaleSettings <a name="CosmosdbCassandraTableAutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableAutoscaleSettings {
    double MaxThroughput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettings.property.maxThroughput">MaxThroughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#max_throughput CosmosdbCassandraTable#max_throughput}. |

---

##### `MaxThroughput`<sup>Optional</sup> <a name="MaxThroughput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettings.property.maxThroughput"></a>

```csharp
public double MaxThroughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#max_throughput CosmosdbCassandraTable#max_throughput}.

---

### CosmosdbCassandraTableConfig <a name="CosmosdbCassandraTableConfig" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CassandraKeyspaceId,
    string Name,
    CosmosdbCassandraTableSchema Schema,
    double AnalyticalStorageTtl = null,
    CosmosdbCassandraTableAutoscaleSettings AutoscaleSettings = null,
    double DefaultTtl = null,
    string Id = null,
    double Throughput = null,
    CosmosdbCassandraTableTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.cassandraKeyspaceId">CassandraKeyspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#cassandra_keyspace_id CosmosdbCassandraTable#cassandra_keyspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#name CosmosdbCassandraTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.schema">Schema</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema">CosmosdbCassandraTableSchema</a></code> | schema block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.analyticalStorageTtl">AnalyticalStorageTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#analytical_storage_ttl CosmosdbCassandraTable#analytical_storage_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.autoscaleSettings">AutoscaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettings">CosmosdbCassandraTableAutoscaleSettings</a></code> | autoscale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.defaultTtl">DefaultTtl</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#default_ttl CosmosdbCassandraTable#default_ttl}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#id CosmosdbCassandraTable#id}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.throughput">Throughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#throughput CosmosdbCassandraTable#throughput}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts">CosmosdbCassandraTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CassandraKeyspaceId`<sup>Required</sup> <a name="CassandraKeyspaceId" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.cassandraKeyspaceId"></a>

```csharp
public string CassandraKeyspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#cassandra_keyspace_id CosmosdbCassandraTable#cassandra_keyspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#name CosmosdbCassandraTable#name}.

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.schema"></a>

```csharp
public CosmosdbCassandraTableSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema">CosmosdbCassandraTableSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#schema CosmosdbCassandraTable#schema}

---

##### `AnalyticalStorageTtl`<sup>Optional</sup> <a name="AnalyticalStorageTtl" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.analyticalStorageTtl"></a>

```csharp
public double AnalyticalStorageTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#analytical_storage_ttl CosmosdbCassandraTable#analytical_storage_ttl}.

---

##### `AutoscaleSettings`<sup>Optional</sup> <a name="AutoscaleSettings" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.autoscaleSettings"></a>

```csharp
public CosmosdbCassandraTableAutoscaleSettings AutoscaleSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettings">CosmosdbCassandraTableAutoscaleSettings</a>

autoscale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#autoscale_settings CosmosdbCassandraTable#autoscale_settings}

---

##### `DefaultTtl`<sup>Optional</sup> <a name="DefaultTtl" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.defaultTtl"></a>

```csharp
public double DefaultTtl { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#default_ttl CosmosdbCassandraTable#default_ttl}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#id CosmosdbCassandraTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Throughput`<sup>Optional</sup> <a name="Throughput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.throughput"></a>

```csharp
public double Throughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#throughput CosmosdbCassandraTable#throughput}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableConfig.property.timeouts"></a>

```csharp
public CosmosdbCassandraTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts">CosmosdbCassandraTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#timeouts CosmosdbCassandraTable#timeouts}

---

### CosmosdbCassandraTableSchema <a name="CosmosdbCassandraTableSchema" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableSchema {
    object Column,
    object PartitionKey,
    object ClusterKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema.property.column">Column</a></code> | <code>object</code> | column block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema.property.partitionKey">PartitionKey</a></code> | <code>object</code> | partition_key block. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema.property.clusterKey">ClusterKey</a></code> | <code>object</code> | cluster_key block. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema.property.column"></a>

```csharp
public object Column { get; set; }
```

- *Type:* object

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#column CosmosdbCassandraTable#column}

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema.property.partitionKey"></a>

```csharp
public object PartitionKey { get; set; }
```

- *Type:* object

partition_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#partition_key CosmosdbCassandraTable#partition_key}

---

##### `ClusterKey`<sup>Optional</sup> <a name="ClusterKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema.property.clusterKey"></a>

```csharp
public object ClusterKey { get; set; }
```

- *Type:* object

cluster_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#cluster_key CosmosdbCassandraTable#cluster_key}

---

### CosmosdbCassandraTableSchemaClusterKey <a name="CosmosdbCassandraTableSchemaClusterKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableSchemaClusterKey {
    string Name,
    string OrderBy
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKey.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#name CosmosdbCassandraTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKey.property.orderBy">OrderBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#order_by CosmosdbCassandraTable#order_by}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKey.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#name CosmosdbCassandraTable#name}.

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKey.property.orderBy"></a>

```csharp
public string OrderBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#order_by CosmosdbCassandraTable#order_by}.

---

### CosmosdbCassandraTableSchemaColumn <a name="CosmosdbCassandraTableSchemaColumn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableSchemaColumn {
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumn.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#name CosmosdbCassandraTable#name}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumn.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#type CosmosdbCassandraTable#type}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumn.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#name CosmosdbCassandraTable#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumn.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#type CosmosdbCassandraTable#type}.

---

### CosmosdbCassandraTableSchemaPartitionKey <a name="CosmosdbCassandraTableSchemaPartitionKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableSchemaPartitionKey {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKey.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#name CosmosdbCassandraTable#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKey.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#name CosmosdbCassandraTable#name}.

---

### CosmosdbCassandraTableTimeouts <a name="CosmosdbCassandraTableTimeouts" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#create CosmosdbCassandraTable#create}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#delete CosmosdbCassandraTable#delete}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#read CosmosdbCassandraTable#read}. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#update CosmosdbCassandraTable#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#create CosmosdbCassandraTable#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#delete CosmosdbCassandraTable#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#read CosmosdbCassandraTable#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.31.0/docs/resources/cosmosdb_cassandra_table#update CosmosdbCassandraTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CosmosdbCassandraTableAutoscaleSettingsOutputReference <a name="CosmosdbCassandraTableAutoscaleSettingsOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableAutoscaleSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.resetMaxThroughput">ResetMaxThroughput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxThroughput` <a name="ResetMaxThroughput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.resetMaxThroughput"></a>

```csharp
private void ResetMaxThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.property.maxThroughputInput">MaxThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.property.maxThroughput">MaxThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettings">CosmosdbCassandraTableAutoscaleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxThroughputInput`<sup>Optional</sup> <a name="MaxThroughputInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.property.maxThroughputInput"></a>

```csharp
public double MaxThroughputInput { get; }
```

- *Type:* double

---

##### `MaxThroughput`<sup>Required</sup> <a name="MaxThroughput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.property.maxThroughput"></a>

```csharp
public double MaxThroughput { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettingsOutputReference.property.internalValue"></a>

```csharp
public CosmosdbCassandraTableAutoscaleSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableAutoscaleSettings">CosmosdbCassandraTableAutoscaleSettings</a>

---


### CosmosdbCassandraTableSchemaClusterKeyList <a name="CosmosdbCassandraTableSchemaClusterKeyList" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableSchemaClusterKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.get"></a>

```csharp
private CosmosdbCassandraTableSchemaClusterKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbCassandraTableSchemaClusterKeyOutputReference <a name="CosmosdbCassandraTableSchemaClusterKeyOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableSchemaClusterKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.orderByInput">OrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.orderBy">OrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.orderByInput"></a>

```csharp
public string OrderByInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.orderBy"></a>

```csharp
public string OrderBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbCassandraTableSchemaColumnList <a name="CosmosdbCassandraTableSchemaColumnList" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableSchemaColumnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.get"></a>

```csharp
private CosmosdbCassandraTableSchemaColumnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbCassandraTableSchemaColumnOutputReference <a name="CosmosdbCassandraTableSchemaColumnOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableSchemaColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbCassandraTableSchemaOutputReference <a name="CosmosdbCassandraTableSchemaOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.putClusterKey">PutClusterKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.putPartitionKey">PutPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.resetClusterKey">ResetClusterKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClusterKey` <a name="PutClusterKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.putClusterKey"></a>

```csharp
private void PutClusterKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.putClusterKey.parameter.value"></a>

- *Type:* object

---

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.putColumn"></a>

```csharp
private void PutColumn(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.putColumn.parameter.value"></a>

- *Type:* object

---

##### `PutPartitionKey` <a name="PutPartitionKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.putPartitionKey"></a>

```csharp
private void PutPartitionKey(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.putPartitionKey.parameter.value"></a>

- *Type:* object

---

##### `ResetClusterKey` <a name="ResetClusterKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.resetClusterKey"></a>

```csharp
private void ResetClusterKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.clusterKey">ClusterKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList">CosmosdbCassandraTableSchemaClusterKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList">CosmosdbCassandraTableSchemaColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.partitionKey">PartitionKey</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList">CosmosdbCassandraTableSchemaPartitionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.clusterKeyInput">ClusterKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.columnInput">ColumnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.partitionKeyInput">PartitionKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema">CosmosdbCassandraTableSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterKey`<sup>Required</sup> <a name="ClusterKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.clusterKey"></a>

```csharp
public CosmosdbCassandraTableSchemaClusterKeyList ClusterKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaClusterKeyList">CosmosdbCassandraTableSchemaClusterKeyList</a>

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.column"></a>

```csharp
public CosmosdbCassandraTableSchemaColumnList Column { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaColumnList">CosmosdbCassandraTableSchemaColumnList</a>

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.partitionKey"></a>

```csharp
public CosmosdbCassandraTableSchemaPartitionKeyList PartitionKey { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList">CosmosdbCassandraTableSchemaPartitionKeyList</a>

---

##### `ClusterKeyInput`<sup>Optional</sup> <a name="ClusterKeyInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.clusterKeyInput"></a>

```csharp
public object ClusterKeyInput { get; }
```

- *Type:* object

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.columnInput"></a>

```csharp
public object ColumnInput { get; }
```

- *Type:* object

---

##### `PartitionKeyInput`<sup>Optional</sup> <a name="PartitionKeyInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.partitionKeyInput"></a>

```csharp
public object PartitionKeyInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaOutputReference.property.internalValue"></a>

```csharp
public CosmosdbCassandraTableSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchema">CosmosdbCassandraTableSchema</a>

---


### CosmosdbCassandraTableSchemaPartitionKeyList <a name="CosmosdbCassandraTableSchemaPartitionKeyList" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableSchemaPartitionKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.get"></a>

```csharp
private CosmosdbCassandraTableSchemaPartitionKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbCassandraTableSchemaPartitionKeyOutputReference <a name="CosmosdbCassandraTableSchemaPartitionKeyOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableSchemaPartitionKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableSchemaPartitionKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CosmosdbCassandraTableTimeoutsOutputReference <a name="CosmosdbCassandraTableTimeoutsOutputReference" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new CosmosdbCassandraTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.cosmosdbCassandraTable.CosmosdbCassandraTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



