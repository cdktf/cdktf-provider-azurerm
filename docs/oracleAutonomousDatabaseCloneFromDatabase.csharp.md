# `oracleAutonomousDatabaseCloneFromDatabase` Submodule <a name="`oracleAutonomousDatabaseCloneFromDatabase` Submodule" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseCloneFromDatabase <a name="OracleAutonomousDatabaseCloneFromDatabase" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database azurerm_oracle_autonomous_database_clone_from_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OracleAutonomousDatabaseCloneFromDatabase(Construct Scope, string Id, OracleAutonomousDatabaseCloneFromDatabaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig">OracleAutonomousDatabaseCloneFromDatabaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig">OracleAutonomousDatabaseCloneFromDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetAllowedIpAddresses">ResetAllowedIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetCustomerContacts">ResetCustomerContacts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetRefreshableModel">ResetRefreshableModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts"></a>

```csharp
private void PutTimeouts(OracleAutonomousDatabaseCloneFromDatabaseTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `ResetAllowedIpAddresses` <a name="ResetAllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetAllowedIpAddresses"></a>

```csharp
private void ResetAllowedIpAddresses()
```

##### `ResetCustomerContacts` <a name="ResetCustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetCustomerContacts"></a>

```csharp
private void ResetCustomerContacts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRefreshableModel` <a name="ResetRefreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetRefreshableModel"></a>

```csharp
private void ResetRefreshableModel()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OracleAutonomousDatabaseCloneFromDatabase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OracleAutonomousDatabaseCloneFromDatabase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OracleAutonomousDatabaseCloneFromDatabase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

OracleAutonomousDatabaseCloneFromDatabase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OracleAutonomousDatabaseCloneFromDatabase resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OracleAutonomousDatabaseCloneFromDatabase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OracleAutonomousDatabaseCloneFromDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseCloneFromDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddressesInput">AllowedIpAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabledInput">AutoScalingEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabledInput">AutoScalingForStorageEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDaysInput">BackupRetentionPeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSetInput">CharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneTypeInput">CloneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCountInput">ComputeCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModelInput">ComputeModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContactsInput">CustomerContactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersionInput">DatabaseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkloadInput">DatabaseWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTbInput">DataStorageSizeInTbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModelInput">LicenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequiredInput">MtlsConnectionRequiredInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSetInput">NationalCharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModelInput">RefreshableModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseIdInput">SourceAutonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPassword">AdminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled">AutoScalingForStorageEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSet">CharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneType">CloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCount">ComputeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModel">ComputeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContacts">CustomerContacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload">DatabaseWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb">DataStorageSizeInTb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModel">LicenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModel">RefreshableModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeouts"></a>

```csharp
public OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference">OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference</a>

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPasswordInput"></a>

```csharp
public string AdminPasswordInput { get; }
```

- *Type:* string

---

##### `AllowedIpAddressesInput`<sup>Optional</sup> <a name="AllowedIpAddressesInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddressesInput"></a>

```csharp
public string[] AllowedIpAddressesInput { get; }
```

- *Type:* string[]

---

##### `AutoScalingEnabledInput`<sup>Optional</sup> <a name="AutoScalingEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabledInput"></a>

```csharp
public bool|IResolvable AutoScalingEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AutoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="AutoScalingForStorageEnabledInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabledInput"></a>

```csharp
public bool|IResolvable AutoScalingForStorageEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BackupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="BackupRetentionPeriodInDaysInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDaysInput"></a>

```csharp
public double BackupRetentionPeriodInDaysInput { get; }
```

- *Type:* double

---

##### `CharacterSetInput`<sup>Optional</sup> <a name="CharacterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSetInput"></a>

```csharp
public string CharacterSetInput { get; }
```

- *Type:* string

---

##### `CloneTypeInput`<sup>Optional</sup> <a name="CloneTypeInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneTypeInput"></a>

```csharp
public string CloneTypeInput { get; }
```

- *Type:* string

---

##### `ComputeCountInput`<sup>Optional</sup> <a name="ComputeCountInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCountInput"></a>

```csharp
public double ComputeCountInput { get; }
```

- *Type:* double

---

##### `ComputeModelInput`<sup>Optional</sup> <a name="ComputeModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModelInput"></a>

```csharp
public string ComputeModelInput { get; }
```

- *Type:* string

---

##### `CustomerContactsInput`<sup>Optional</sup> <a name="CustomerContactsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContactsInput"></a>

```csharp
public string[] CustomerContactsInput { get; }
```

- *Type:* string[]

---

##### `DatabaseVersionInput`<sup>Optional</sup> <a name="DatabaseVersionInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersionInput"></a>

```csharp
public string DatabaseVersionInput { get; }
```

- *Type:* string

---

##### `DatabaseWorkloadInput`<sup>Optional</sup> <a name="DatabaseWorkloadInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkloadInput"></a>

```csharp
public string DatabaseWorkloadInput { get; }
```

- *Type:* string

---

##### `DataStorageSizeInTbInput`<sup>Optional</sup> <a name="DataStorageSizeInTbInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTbInput"></a>

```csharp
public double DataStorageSizeInTbInput { get; }
```

- *Type:* double

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LicenseModelInput`<sup>Optional</sup> <a name="LicenseModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModelInput"></a>

```csharp
public string LicenseModelInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MtlsConnectionRequiredInput`<sup>Optional</sup> <a name="MtlsConnectionRequiredInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequiredInput"></a>

```csharp
public bool|IResolvable MtlsConnectionRequiredInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NationalCharacterSetInput`<sup>Optional</sup> <a name="NationalCharacterSetInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSetInput"></a>

```csharp
public string NationalCharacterSetInput { get; }
```

- *Type:* string

---

##### `RefreshableModelInput`<sup>Optional</sup> <a name="RefreshableModelInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModelInput"></a>

```csharp
public string RefreshableModelInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseIdInput`<sup>Optional</sup> <a name="SourceAutonomousDatabaseIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseIdInput"></a>

```csharp
public string SourceAutonomousDatabaseIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.timeoutsInput"></a>

```csharp
public IResolvable|OracleAutonomousDatabaseCloneFromDatabaseTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.adminPassword"></a>

```csharp
public string AdminPassword { get; }
```

- *Type:* string

---

##### `AllowedIpAddresses`<sup>Required</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.allowedIpAddresses"></a>

```csharp
public string[] AllowedIpAddresses { get; }
```

- *Type:* string[]

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingEnabled"></a>

```csharp
public bool|IResolvable AutoScalingEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AutoScalingForStorageEnabled`<sup>Required</sup> <a name="AutoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.autoScalingForStorageEnabled"></a>

```csharp
public bool|IResolvable AutoScalingForStorageEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.backupRetentionPeriodInDays"></a>

```csharp
public double BackupRetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.characterSet"></a>

```csharp
public string CharacterSet { get; }
```

- *Type:* string

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.cloneType"></a>

```csharp
public string CloneType { get; }
```

- *Type:* string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeCount"></a>

```csharp
public double ComputeCount { get; }
```

- *Type:* double

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.computeModel"></a>

```csharp
public string ComputeModel { get; }
```

- *Type:* string

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.customerContacts"></a>

```csharp
public string[] CustomerContacts { get; }
```

- *Type:* string[]

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; }
```

- *Type:* string

---

##### `DatabaseWorkload`<sup>Required</sup> <a name="DatabaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.databaseWorkload"></a>

```csharp
public string DatabaseWorkload { get; }
```

- *Type:* string

---

##### `DataStorageSizeInTb`<sup>Required</sup> <a name="DataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.dataStorageSizeInTb"></a>

```csharp
public double DataStorageSizeInTb { get; }
```

- *Type:* double

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.licenseModel"></a>

```csharp
public string LicenseModel { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.mtlsConnectionRequired"></a>

```csharp
public bool|IResolvable MtlsConnectionRequired { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.nationalCharacterSet"></a>

```csharp
public string NationalCharacterSet { get; }
```

- *Type:* string

---

##### `RefreshableModel`<sup>Required</sup> <a name="RefreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.refreshableModel"></a>

```csharp
public string RefreshableModel { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.sourceAutonomousDatabaseId"></a>

```csharp
public string SourceAutonomousDatabaseId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseCloneFromDatabaseConfig <a name="OracleAutonomousDatabaseCloneFromDatabaseConfig" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OracleAutonomousDatabaseCloneFromDatabaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AdminPassword,
    bool|IResolvable AutoScalingEnabled,
    bool|IResolvable AutoScalingForStorageEnabled,
    double BackupRetentionPeriodInDays,
    string CharacterSet,
    string CloneType,
    double ComputeCount,
    string ComputeModel,
    string DatabaseVersion,
    string DatabaseWorkload,
    double DataStorageSizeInTb,
    string DisplayName,
    string LicenseModel,
    string Location,
    bool|IResolvable MtlsConnectionRequired,
    string Name,
    string NationalCharacterSet,
    string ResourceGroupName,
    string SourceAutonomousDatabaseId,
    string[] AllowedIpAddresses = null,
    string[] CustomerContacts = null,
    string Id = null,
    string RefreshableModel = null,
    string SubnetId = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    OracleAutonomousDatabaseCloneFromDatabaseTimeouts Timeouts = null,
    string VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.adminPassword">AdminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingForStorageEnabled">AutoScalingForStorageEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.characterSet">CharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.cloneType">CloneType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeCount">ComputeCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeModel">ComputeModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseVersion">DatabaseVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseWorkload">DatabaseWorkload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dataStorageSizeInTb">DataStorageSizeInTb</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.licenseModel">LicenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.customerContacts">CustomerContacts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.refreshableModel">RefreshableModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.adminPassword"></a>

```csharp
public string AdminPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#admin_password OracleAutonomousDatabaseCloneFromDatabase#admin_password}.

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingEnabled"></a>

```csharp
public bool|IResolvable AutoScalingEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_enabled}.

---

##### `AutoScalingForStorageEnabled`<sup>Required</sup> <a name="AutoScalingForStorageEnabled" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.autoScalingForStorageEnabled"></a>

```csharp
public bool|IResolvable AutoScalingForStorageEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#auto_scaling_for_storage_enabled OracleAutonomousDatabaseCloneFromDatabase#auto_scaling_for_storage_enabled}.

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```csharp
public double BackupRetentionPeriodInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#backup_retention_period_in_days OracleAutonomousDatabaseCloneFromDatabase#backup_retention_period_in_days}.

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.characterSet"></a>

```csharp
public string CharacterSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#character_set OracleAutonomousDatabaseCloneFromDatabase#character_set}.

---

##### `CloneType`<sup>Required</sup> <a name="CloneType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.cloneType"></a>

```csharp
public string CloneType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#clone_type OracleAutonomousDatabaseCloneFromDatabase#clone_type}.

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeCount"></a>

```csharp
public double ComputeCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_count OracleAutonomousDatabaseCloneFromDatabase#compute_count}.

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.computeModel"></a>

```csharp
public string ComputeModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#compute_model OracleAutonomousDatabaseCloneFromDatabase#compute_model}.

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseVersion"></a>

```csharp
public string DatabaseVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_version OracleAutonomousDatabaseCloneFromDatabase#database_version}.

---

##### `DatabaseWorkload`<sup>Required</sup> <a name="DatabaseWorkload" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.databaseWorkload"></a>

```csharp
public string DatabaseWorkload { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#database_workload OracleAutonomousDatabaseCloneFromDatabase#database_workload}.

---

##### `DataStorageSizeInTb`<sup>Required</sup> <a name="DataStorageSizeInTb" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.dataStorageSizeInTb"></a>

```csharp
public double DataStorageSizeInTb { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#data_storage_size_in_tb OracleAutonomousDatabaseCloneFromDatabase#data_storage_size_in_tb}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#display_name OracleAutonomousDatabaseCloneFromDatabase#display_name}.

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.licenseModel"></a>

```csharp
public string LicenseModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#license_model OracleAutonomousDatabaseCloneFromDatabase#license_model}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#location OracleAutonomousDatabaseCloneFromDatabase#location}.

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.mtlsConnectionRequired"></a>

```csharp
public bool|IResolvable MtlsConnectionRequired { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#mtls_connection_required OracleAutonomousDatabaseCloneFromDatabase#mtls_connection_required}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#name OracleAutonomousDatabaseCloneFromDatabase#name}.

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.nationalCharacterSet"></a>

```csharp
public string NationalCharacterSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#national_character_set OracleAutonomousDatabaseCloneFromDatabase#national_character_set}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#resource_group_name OracleAutonomousDatabaseCloneFromDatabase#resource_group_name}.

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.sourceAutonomousDatabaseId"></a>

```csharp
public string SourceAutonomousDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#source_autonomous_database_id OracleAutonomousDatabaseCloneFromDatabase#source_autonomous_database_id}.

---

##### `AllowedIpAddresses`<sup>Optional</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.allowedIpAddresses"></a>

```csharp
public string[] AllowedIpAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#allowed_ip_addresses OracleAutonomousDatabaseCloneFromDatabase#allowed_ip_addresses}.

---

##### `CustomerContacts`<sup>Optional</sup> <a name="CustomerContacts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.customerContacts"></a>

```csharp
public string[] CustomerContacts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#customer_contacts OracleAutonomousDatabaseCloneFromDatabase#customer_contacts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#id OracleAutonomousDatabaseCloneFromDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RefreshableModel`<sup>Optional</sup> <a name="RefreshableModel" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.refreshableModel"></a>

```csharp
public string RefreshableModel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#refreshable_model OracleAutonomousDatabaseCloneFromDatabase#refreshable_model}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#subnet_id OracleAutonomousDatabaseCloneFromDatabase#subnet_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#tags OracleAutonomousDatabaseCloneFromDatabase#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.timeouts"></a>

```csharp
public OracleAutonomousDatabaseCloneFromDatabaseTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#timeouts OracleAutonomousDatabaseCloneFromDatabase#timeouts}

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseConfig.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#virtual_network_id OracleAutonomousDatabaseCloneFromDatabase#virtual_network_id}.

---

### OracleAutonomousDatabaseCloneFromDatabaseTimeouts <a name="OracleAutonomousDatabaseCloneFromDatabaseTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OracleAutonomousDatabaseCloneFromDatabaseTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#create OracleAutonomousDatabaseCloneFromDatabase#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#delete OracleAutonomousDatabaseCloneFromDatabase#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/oracle_autonomous_database_clone_from_database#read OracleAutonomousDatabaseCloneFromDatabase#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference <a name="OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OracleAutonomousDatabaseCloneFromDatabaseTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseCloneFromDatabase.OracleAutonomousDatabaseCloneFromDatabaseTimeouts">OracleAutonomousDatabaseCloneFromDatabaseTimeouts</a>

---



