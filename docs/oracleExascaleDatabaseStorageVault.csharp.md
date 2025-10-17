# `oracleExascaleDatabaseStorageVault` Submodule <a name="`oracleExascaleDatabaseStorageVault` Submodule" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleExascaleDatabaseStorageVault <a name="OracleExascaleDatabaseStorageVault" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault azurerm_oracle_exascale_database_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OracleExascaleDatabaseStorageVault(Construct Scope, string Id, OracleExascaleDatabaseStorageVaultConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig">OracleExascaleDatabaseStorageVaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig">OracleExascaleDatabaseStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage">PutHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHighCapacityDatabaseStorage` <a name="PutHighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage"></a>

```csharp
private void PutHighCapacityDatabaseStorage(OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putHighCapacityDatabaseStorage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts"></a>

```csharp
private void PutTimeouts(OracleExascaleDatabaseStorageVaultTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OracleExascaleDatabaseStorageVault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OracleExascaleDatabaseStorageVault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OracleExascaleDatabaseStorageVault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OracleExascaleDatabaseStorageVault.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleExascaleDatabaseStorageVault to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleExascaleDatabaseStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OracleExascaleDatabaseStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage">HighCapacityDatabaseStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference">OracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentageInput">AdditionalFlashCachePercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorageInput">HighCapacityDatabaseStorageInput</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zonesInput">ZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage">AdditionalFlashCachePercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `HighCapacityDatabaseStorage`<sup>Required</sup> <a name="HighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage"></a>

```csharp
public OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference HighCapacityDatabaseStorage { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeouts"></a>

```csharp
public OracleExascaleDatabaseStorageVaultTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference">OracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a>

---

##### `AdditionalFlashCachePercentageInput`<sup>Optional</sup> <a name="AdditionalFlashCachePercentageInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentageInput"></a>

```csharp
public double AdditionalFlashCachePercentageInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `HighCapacityDatabaseStorageInput`<sup>Optional</sup> <a name="HighCapacityDatabaseStorageInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorageInput"></a>

```csharp
public OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage HighCapacityDatabaseStorageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeoutsInput"></a>

```csharp
public IResolvable|OracleExascaleDatabaseStorageVaultTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `ZonesInput`<sup>Optional</sup> <a name="ZonesInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zonesInput"></a>

```csharp
public string[] ZonesInput { get; }
```

- *Type:* string[]

---

##### `AdditionalFlashCachePercentage`<sup>Required</sup> <a name="AdditionalFlashCachePercentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage"></a>

```csharp
public double AdditionalFlashCachePercentage { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleExascaleDatabaseStorageVaultConfig <a name="OracleExascaleDatabaseStorageVaultConfig" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OracleExascaleDatabaseStorageVaultConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double AdditionalFlashCachePercentage,
    string DisplayName,
    OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage HighCapacityDatabaseStorage,
    string Location,
    string Name,
    string ResourceGroupName,
    string[] Zones,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    OracleExascaleDatabaseStorageVaultTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.additionalFlashCachePercentage">AdditionalFlashCachePercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.highCapacityDatabaseStorage">HighCapacityDatabaseStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | high_capacity_database_storage block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.zones">Zones</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AdditionalFlashCachePercentage`<sup>Required</sup> <a name="AdditionalFlashCachePercentage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.additionalFlashCachePercentage"></a>

```csharp
public double AdditionalFlashCachePercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#additional_flash_cache_percentage OracleExascaleDatabaseStorageVault#additional_flash_cache_percentage}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#display_name OracleExascaleDatabaseStorageVault#display_name}.

---

##### `HighCapacityDatabaseStorage`<sup>Required</sup> <a name="HighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.highCapacityDatabaseStorage"></a>

```csharp
public OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage HighCapacityDatabaseStorage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

high_capacity_database_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#high_capacity_database_storage OracleExascaleDatabaseStorageVault#high_capacity_database_storage}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#location OracleExascaleDatabaseStorageVault#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#name OracleExascaleDatabaseStorageVault#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#resource_group_name OracleExascaleDatabaseStorageVault#resource_group_name}.

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.zones"></a>

```csharp
public string[] Zones { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#zones OracleExascaleDatabaseStorageVault#zones}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#description OracleExascaleDatabaseStorageVault#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#id OracleExascaleDatabaseStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#tags OracleExascaleDatabaseStorageVault#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeouts"></a>

```csharp
public OracleExascaleDatabaseStorageVaultTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#timeouts OracleExascaleDatabaseStorageVault#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#time_zone OracleExascaleDatabaseStorageVault#time_zone}.

---

### OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage <a name="OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage {
    double TotalSizeInGb
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGb">TotalSizeInGb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#total_size_in_gb OracleExascaleDatabaseStorageVault#total_size_in_gb}. |

---

##### `TotalSizeInGb`<sup>Required</sup> <a name="TotalSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGb"></a>

```csharp
public double TotalSizeInGb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#total_size_in_gb OracleExascaleDatabaseStorageVault#total_size_in_gb}.

---

### OracleExascaleDatabaseStorageVaultTimeouts <a name="OracleExascaleDatabaseStorageVaultTimeouts" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OracleExascaleDatabaseStorageVaultTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#create OracleExascaleDatabaseStorageVault#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#delete OracleExascaleDatabaseStorageVault#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#read OracleExascaleDatabaseStorageVault#read}. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#update OracleExascaleDatabaseStorageVault#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#create OracleExascaleDatabaseStorageVault#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#delete OracleExascaleDatabaseStorageVault#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#read OracleExascaleDatabaseStorageVault#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_exascale_database_storage_vault#update OracleExascaleDatabaseStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference <a name="OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb">AvailableSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbInput">TotalSizeInGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb">TotalSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableSizeInGb`<sup>Required</sup> <a name="AvailableSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb"></a>

```csharp
public double AvailableSizeInGb { get; }
```

- *Type:* double

---

##### `TotalSizeInGbInput`<sup>Optional</sup> <a name="TotalSizeInGbInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbInput"></a>

```csharp
public double TotalSizeInGbInput { get; }
```

- *Type:* double

---

##### `TotalSizeInGb`<sup>Required</sup> <a name="TotalSizeInGb" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb"></a>

```csharp
public double TotalSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```csharp
public OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">OracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---


### OracleExascaleDatabaseStorageVaultTimeoutsOutputReference <a name="OracleExascaleDatabaseStorageVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OracleExascaleDatabaseStorageVaultTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OracleExascaleDatabaseStorageVaultTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleExascaleDatabaseStorageVault.OracleExascaleDatabaseStorageVaultTimeouts">OracleExascaleDatabaseStorageVaultTimeouts</a>

---



