# `dataFactoryLinkedServiceCosmosdbMongoapi` Submodule <a name="`dataFactoryLinkedServiceCosmosdbMongoapi` Submodule" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataFactoryLinkedServiceCosmosdbMongoapi <a name="DataFactoryLinkedServiceCosmosdbMongoapi" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi azurerm_data_factory_linked_service_cosmosdb_mongoapi}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceCosmosdbMongoapi(Construct Scope, string Id, DataFactoryLinkedServiceCosmosdbMongoapiConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig">DataFactoryLinkedServiceCosmosdbMongoapiConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig">DataFactoryLinkedServiceCosmosdbMongoapiConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAdditionalProperties">ResetAdditionalProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDatabase">ResetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetIntegrationRuntimeName">ResetIntegrationRuntimeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetServerVersionIs32OrHigher">ResetServerVersionIs32OrHigher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts"></a>

```csharp
private void PutTimeouts(DataFactoryLinkedServiceCosmosdbMongoapiTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>

---

##### `ResetAdditionalProperties` <a name="ResetAdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAdditionalProperties"></a>

```csharp
private void ResetAdditionalProperties()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetDatabase` <a name="ResetDatabase" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDatabase"></a>

```csharp
private void ResetDatabase()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIntegrationRuntimeName` <a name="ResetIntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetIntegrationRuntimeName"></a>

```csharp
private void ResetIntegrationRuntimeName()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetServerVersionIs32OrHigher` <a name="ResetServerVersionIs32OrHigher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetServerVersionIs32OrHigher"></a>

```csharp
private void ResetServerVersionIs32OrHigher()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdbMongoapi resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceCosmosdbMongoapi.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceCosmosdbMongoapi.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceCosmosdbMongoapi.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataFactoryLinkedServiceCosmosdbMongoapi.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataFactoryLinkedServiceCosmosdbMongoapi resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataFactoryLinkedServiceCosmosdbMongoapi to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataFactoryLinkedServiceCosmosdbMongoapi that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataFactoryLinkedServiceCosmosdbMongoapi to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalPropertiesInput">AdditionalPropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotationsInput">AnnotationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryIdInput">DataFactoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeNameInput">IntegrationRuntimeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigherInput">ServerVersionIs32OrHigherInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotations">Annotations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigher">ServerVersionIs32OrHigher</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference">DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference</a>

---

##### `AdditionalPropertiesInput`<sup>Optional</sup> <a name="AdditionalPropertiesInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalPropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalPropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotationsInput"></a>

```csharp
public string[] AnnotationsInput { get; }
```

- *Type:* string[]

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `DataFactoryIdInput`<sup>Optional</sup> <a name="DataFactoryIdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryIdInput"></a>

```csharp
public string DataFactoryIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeNameInput`<sup>Optional</sup> <a name="IntegrationRuntimeNameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeNameInput"></a>

```csharp
public string IntegrationRuntimeNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServerVersionIs32OrHigherInput`<sup>Optional</sup> <a name="ServerVersionIs32OrHigherInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigherInput"></a>

```csharp
public object ServerVersionIs32OrHigherInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `AdditionalProperties`<sup>Required</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.annotations"></a>

```csharp
public string[] Annotations { get; }
```

- *Type:* string[]

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IntegrationRuntimeName`<sup>Required</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ServerVersionIs32OrHigher`<sup>Required</sup> <a name="ServerVersionIs32OrHigher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.serverVersionIs32OrHigher"></a>

```csharp
public object ServerVersionIs32OrHigher { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapi.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataFactoryLinkedServiceCosmosdbMongoapiConfig <a name="DataFactoryLinkedServiceCosmosdbMongoapiConfig" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceCosmosdbMongoapiConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataFactoryId,
    string Name,
    System.Collections.Generic.IDictionary<string, string> AdditionalProperties = null,
    string[] Annotations = null,
    string ConnectionString = null,
    string Database = null,
    string Description = null,
    string Id = null,
    string IntegrationRuntimeName = null,
    System.Collections.Generic.IDictionary<string, string> Parameters = null,
    object ServerVersionIs32OrHigher = null,
    DataFactoryLinkedServiceCosmosdbMongoapiTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dataFactoryId">DataFactoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.additionalProperties">AdditionalProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.annotations">Annotations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.database">Database</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.integrationRuntimeName">IntegrationRuntimeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.serverVersionIs32OrHigher">ServerVersionIs32OrHigher</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataFactoryId`<sup>Required</sup> <a name="DataFactoryId" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.dataFactoryId"></a>

```csharp
public string DataFactoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#data_factory_id DataFactoryLinkedServiceCosmosdbMongoapi#data_factory_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#name DataFactoryLinkedServiceCosmosdbMongoapi#name}.

---

##### `AdditionalProperties`<sup>Optional</sup> <a name="AdditionalProperties" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.additionalProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AdditionalProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#additional_properties DataFactoryLinkedServiceCosmosdbMongoapi#additional_properties}.

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.annotations"></a>

```csharp
public string[] Annotations { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#annotations DataFactoryLinkedServiceCosmosdbMongoapi#annotations}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#connection_string DataFactoryLinkedServiceCosmosdbMongoapi#connection_string}.

---

##### `Database`<sup>Optional</sup> <a name="Database" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#database DataFactoryLinkedServiceCosmosdbMongoapi#database}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#description DataFactoryLinkedServiceCosmosdbMongoapi#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#id DataFactoryLinkedServiceCosmosdbMongoapi#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationRuntimeName`<sup>Optional</sup> <a name="IntegrationRuntimeName" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.integrationRuntimeName"></a>

```csharp
public string IntegrationRuntimeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#integration_runtime_name DataFactoryLinkedServiceCosmosdbMongoapi#integration_runtime_name}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#parameters DataFactoryLinkedServiceCosmosdbMongoapi#parameters}.

---

##### `ServerVersionIs32OrHigher`<sup>Optional</sup> <a name="ServerVersionIs32OrHigher" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.serverVersionIs32OrHigher"></a>

```csharp
public object ServerVersionIs32OrHigher { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#server_version_is_32_or_higher DataFactoryLinkedServiceCosmosdbMongoapi#server_version_is_32_or_higher}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiConfig.property.timeouts"></a>

```csharp
public DataFactoryLinkedServiceCosmosdbMongoapiTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts">DataFactoryLinkedServiceCosmosdbMongoapiTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#timeouts DataFactoryLinkedServiceCosmosdbMongoapi#timeouts}

---

### DataFactoryLinkedServiceCosmosdbMongoapiTimeouts <a name="DataFactoryLinkedServiceCosmosdbMongoapiTimeouts" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceCosmosdbMongoapiTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#create DataFactoryLinkedServiceCosmosdbMongoapi#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#delete DataFactoryLinkedServiceCosmosdbMongoapi#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#read DataFactoryLinkedServiceCosmosdbMongoapi#read}. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#update DataFactoryLinkedServiceCosmosdbMongoapi#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#create DataFactoryLinkedServiceCosmosdbMongoapi#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#delete DataFactoryLinkedServiceCosmosdbMongoapi#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#read DataFactoryLinkedServiceCosmosdbMongoapi#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.116.0/docs/resources/data_factory_linked_service_cosmosdb_mongoapi#update DataFactoryLinkedServiceCosmosdbMongoapi#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference <a name="DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataFactoryLinkedServiceCosmosdbMongoapi.DataFactoryLinkedServiceCosmosdbMongoapiTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



