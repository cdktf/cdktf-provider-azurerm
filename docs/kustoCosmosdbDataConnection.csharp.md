# `kustoCosmosdbDataConnection` Submodule <a name="`kustoCosmosdbDataConnection` Submodule" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KustoCosmosdbDataConnection <a name="KustoCosmosdbDataConnection" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection azurerm_kusto_cosmosdb_data_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoCosmosdbDataConnection(Construct Scope, string Id, KustoCosmosdbDataConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig">KustoCosmosdbDataConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig">KustoCosmosdbDataConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetMappingRuleName">ResetMappingRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetRetrievalStartDate">ResetRetrievalStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(KustoCosmosdbDataConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMappingRuleName` <a name="ResetMappingRuleName" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetMappingRuleName"></a>

```csharp
private void ResetMappingRuleName()
```

##### `ResetRetrievalStartDate` <a name="ResetRetrievalStartDate" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetRetrievalStartDate"></a>

```csharp
private void ResetRetrievalStartDate()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KustoCosmosdbDataConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoCosmosdbDataConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoCosmosdbDataConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoCosmosdbDataConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KustoCosmosdbDataConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KustoCosmosdbDataConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KustoCosmosdbDataConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KustoCosmosdbDataConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KustoCosmosdbDataConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference">KustoCosmosdbDataConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerIdInput">CosmosdbContainerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseIdInput">KustoDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityIdInput">ManagedIdentityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleNameInput">MappingRuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDateInput">RetrievalStartDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerId">CosmosdbContainerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseId">KustoDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityId">ManagedIdentityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleName">MappingRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDate">RetrievalStartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeouts"></a>

```csharp
public KustoCosmosdbDataConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference">KustoCosmosdbDataConnectionTimeoutsOutputReference</a>

---

##### `CosmosdbContainerIdInput`<sup>Optional</sup> <a name="CosmosdbContainerIdInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerIdInput"></a>

```csharp
public string CosmosdbContainerIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KustoDatabaseIdInput`<sup>Optional</sup> <a name="KustoDatabaseIdInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseIdInput"></a>

```csharp
public string KustoDatabaseIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ManagedIdentityIdInput`<sup>Optional</sup> <a name="ManagedIdentityIdInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityIdInput"></a>

```csharp
public string ManagedIdentityIdInput { get; }
```

- *Type:* string

---

##### `MappingRuleNameInput`<sup>Optional</sup> <a name="MappingRuleNameInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleNameInput"></a>

```csharp
public string MappingRuleNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetrievalStartDateInput`<sup>Optional</sup> <a name="RetrievalStartDateInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDateInput"></a>

```csharp
public string RetrievalStartDateInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CosmosdbContainerId`<sup>Required</sup> <a name="CosmosdbContainerId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.cosmosdbContainerId"></a>

```csharp
public string CosmosdbContainerId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KustoDatabaseId`<sup>Required</sup> <a name="KustoDatabaseId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.kustoDatabaseId"></a>

```csharp
public string KustoDatabaseId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagedIdentityId`<sup>Required</sup> <a name="ManagedIdentityId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.managedIdentityId"></a>

```csharp
public string ManagedIdentityId { get; }
```

- *Type:* string

---

##### `MappingRuleName`<sup>Required</sup> <a name="MappingRuleName" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.mappingRuleName"></a>

```csharp
public string MappingRuleName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RetrievalStartDate`<sup>Required</sup> <a name="RetrievalStartDate" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.retrievalStartDate"></a>

```csharp
public string RetrievalStartDate { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KustoCosmosdbDataConnectionConfig <a name="KustoCosmosdbDataConnectionConfig" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoCosmosdbDataConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CosmosdbContainerId,
    string KustoDatabaseId,
    string Location,
    string ManagedIdentityId,
    string Name,
    string TableName,
    string Id = null,
    string MappingRuleName = null,
    string RetrievalStartDate = null,
    KustoCosmosdbDataConnectionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.cosmosdbContainerId">CosmosdbContainerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#cosmosdb_container_id KustoCosmosdbDataConnection#cosmosdb_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.kustoDatabaseId">KustoDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#kusto_database_id KustoCosmosdbDataConnection#kusto_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#location KustoCosmosdbDataConnection#location}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.managedIdentityId">ManagedIdentityId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#managed_identity_id KustoCosmosdbDataConnection#managed_identity_id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#name KustoCosmosdbDataConnection#name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.tableName">TableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#table_name KustoCosmosdbDataConnection#table_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#id KustoCosmosdbDataConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.mappingRuleName">MappingRuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#mapping_rule_name KustoCosmosdbDataConnection#mapping_rule_name}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.retrievalStartDate">RetrievalStartDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#retrieval_start_date KustoCosmosdbDataConnection#retrieval_start_date}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CosmosdbContainerId`<sup>Required</sup> <a name="CosmosdbContainerId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.cosmosdbContainerId"></a>

```csharp
public string CosmosdbContainerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#cosmosdb_container_id KustoCosmosdbDataConnection#cosmosdb_container_id}.

---

##### `KustoDatabaseId`<sup>Required</sup> <a name="KustoDatabaseId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.kustoDatabaseId"></a>

```csharp
public string KustoDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#kusto_database_id KustoCosmosdbDataConnection#kusto_database_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#location KustoCosmosdbDataConnection#location}.

---

##### `ManagedIdentityId`<sup>Required</sup> <a name="ManagedIdentityId" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.managedIdentityId"></a>

```csharp
public string ManagedIdentityId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#managed_identity_id KustoCosmosdbDataConnection#managed_identity_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#name KustoCosmosdbDataConnection#name}.

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#table_name KustoCosmosdbDataConnection#table_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#id KustoCosmosdbDataConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MappingRuleName`<sup>Optional</sup> <a name="MappingRuleName" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.mappingRuleName"></a>

```csharp
public string MappingRuleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#mapping_rule_name KustoCosmosdbDataConnection#mapping_rule_name}.

---

##### `RetrievalStartDate`<sup>Optional</sup> <a name="RetrievalStartDate" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.retrievalStartDate"></a>

```csharp
public string RetrievalStartDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#retrieval_start_date KustoCosmosdbDataConnection#retrieval_start_date}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionConfig.property.timeouts"></a>

```csharp
public KustoCosmosdbDataConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts">KustoCosmosdbDataConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#timeouts KustoCosmosdbDataConnection#timeouts}

---

### KustoCosmosdbDataConnectionTimeouts <a name="KustoCosmosdbDataConnectionTimeouts" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoCosmosdbDataConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#create KustoCosmosdbDataConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#delete KustoCosmosdbDataConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#read KustoCosmosdbDataConnection#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#create KustoCosmosdbDataConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#delete KustoCosmosdbDataConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.46.0/docs/resources/kusto_cosmosdb_data_connection#read KustoCosmosdbDataConnection#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### KustoCosmosdbDataConnectionTimeoutsOutputReference <a name="KustoCosmosdbDataConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KustoCosmosdbDataConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kustoCosmosdbDataConnection.KustoCosmosdbDataConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



