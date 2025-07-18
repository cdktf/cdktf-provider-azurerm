# `dataProtectionBackupPolicyPostgresqlFlexibleServer` Submodule <a name="`dataProtectionBackupPolicyPostgresqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServer <a name="DataProtectionBackupPolicyPostgresqlFlexibleServer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server azurerm_data_protection_backup_policy_postgresql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServer(Construct Scope, string Id, DataProtectionBackupPolicyPostgresqlFlexibleServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig">DataProtectionBackupPolicyPostgresqlFlexibleServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig">DataProtectionBackupPolicyPostgresqlFlexibleServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule">PutDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule">PutRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetRetentionRule">ResetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultRetentionRule` <a name="PutDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule"></a>

```csharp
private void PutDefaultRetentionRule(DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putDefaultRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

---

##### `PutRetentionRule` <a name="PutRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule"></a>

```csharp
private void PutRetentionRule(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putRetentionRule.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts"></a>

```csharp
private void PutTimeouts(DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRetentionRule` <a name="ResetRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetRetentionRule"></a>

```csharp
private void ResetRetentionRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyPostgresqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyPostgresqlFlexibleServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyPostgresqlFlexibleServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyPostgresqlFlexibleServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyPostgresqlFlexibleServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataProtectionBackupPolicyPostgresqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupPolicyPostgresqlFlexibleServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupPolicyPostgresqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyPostgresqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRule">DefaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRule">RetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervalsInput">BackupRepeatingTimeIntervalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRuleInput">DefaultRetentionRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRuleInput">RetentionRuleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultRetentionRule`<sup>Required</sup> <a name="DefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference DefaultRetentionRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference</a>

---

##### `RetentionRule`<sup>Required</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRule"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList RetentionRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference</a>

---

##### `BackupRepeatingTimeIntervalsInput`<sup>Optional</sup> <a name="BackupRepeatingTimeIntervalsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervalsInput"></a>

```csharp
public string[] BackupRepeatingTimeIntervalsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRetentionRuleInput`<sup>Optional</sup> <a name="DefaultRetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.defaultRetentionRuleInput"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule DefaultRetentionRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetentionRuleInput`<sup>Optional</sup> <a name="RetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.retentionRuleInput"></a>

```csharp
public object RetentionRuleInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.backupRepeatingTimeIntervals"></a>

```csharp
public string[] BackupRepeatingTimeIntervals { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServerConfig <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] BackupRepeatingTimeIntervals,
    DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule DefaultRetentionRule,
    string Name,
    string VaultId,
    string Id = null,
    object RetentionRule = null,
    DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresqlFlexibleServer#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.defaultRetentionRule">DefaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#vault_id DataProtectionBackupPolicyPostgresqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#id DataProtectionBackupPolicyPostgresqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.retentionRule">RetentionRule</a></code> | <code>object</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#time_zone DataProtectionBackupPolicyPostgresqlFlexibleServer#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.backupRepeatingTimeIntervals"></a>

```csharp
public string[] BackupRepeatingTimeIntervals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyPostgresqlFlexibleServer#backup_repeating_time_intervals}.

---

##### `DefaultRetentionRule`<sup>Required</sup> <a name="DefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.defaultRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule DefaultRetentionRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#default_retention_rule DataProtectionBackupPolicyPostgresqlFlexibleServer#default_retention_rule}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#vault_id DataProtectionBackupPolicyPostgresqlFlexibleServer#vault_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#id DataProtectionBackupPolicyPostgresqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionRule`<sup>Optional</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.retentionRule"></a>

```csharp
public object RetentionRule { get; set; }
```

- *Type:* object

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#retention_rule DataProtectionBackupPolicyPostgresqlFlexibleServer#retention_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts">DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#timeouts DataProtectionBackupPolicyPostgresqlFlexibleServer#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#time_zone DataProtectionBackupPolicyPostgresqlFlexibleServer#time_zone}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule {
    object LifeCycle
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.property.lifeCycle">LifeCycle</a></code> | <code>object</code> | life_cycle block. |

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule.property.lifeCycle"></a>

```csharp
public object LifeCycle { get; set; }
```

- *Type:* object

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#life_cycle DataProtectionBackupPolicyPostgresqlFlexibleServer#life_cycle}

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle {
    string DataStoreType,
    string Duration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}. |

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule {
    DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria Criteria,
    object LifeCycle,
    string Name,
    double Priority
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.lifeCycle">LifeCycle</a></code> | <code>object</code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#priority DataProtectionBackupPolicyPostgresqlFlexibleServer#priority}. |

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.criteria"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria Criteria { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#criteria}

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.lifeCycle"></a>

```csharp
public object LifeCycle { get; set; }
```

- *Type:* object

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#life_cycle DataProtectionBackupPolicyPostgresqlFlexibleServer#life_cycle}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#name DataProtectionBackupPolicyPostgresqlFlexibleServer#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#priority DataProtectionBackupPolicyPostgresqlFlexibleServer#priority}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria {
    string AbsoluteCriteria = null,
    string[] DaysOfWeek = null,
    string[] MonthsOfYear = null,
    string[] ScheduledBackupTimes = null,
    string[] WeeksOfMonth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#absolute_criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#days_of_week DataProtectionBackupPolicyPostgresqlFlexibleServer#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#months_of_year DataProtectionBackupPolicyPostgresqlFlexibleServer#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyPostgresqlFlexibleServer#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#weeks_of_month DataProtectionBackupPolicyPostgresqlFlexibleServer#weeks_of_month}. |

---

##### `AbsoluteCriteria`<sup>Optional</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria"></a>

```csharp
public string AbsoluteCriteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#absolute_criteria DataProtectionBackupPolicyPostgresqlFlexibleServer#absolute_criteria}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#days_of_week DataProtectionBackupPolicyPostgresqlFlexibleServer#days_of_week}.

---

##### `MonthsOfYear`<sup>Optional</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#months_of_year DataProtectionBackupPolicyPostgresqlFlexibleServer#months_of_year}.

---

##### `ScheduledBackupTimes`<sup>Optional</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```csharp
public string[] ScheduledBackupTimes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyPostgresqlFlexibleServer#scheduled_backup_times}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#weeks_of_month DataProtectionBackupPolicyPostgresqlFlexibleServer#weeks_of_month}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle {
    string DataStoreType,
    string Duration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}. |

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#data_store_type DataProtectionBackupPolicyPostgresqlFlexibleServer#data_store_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycle.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#duration DataProtectionBackupPolicyPostgresqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#create DataProtectionBackupPolicyPostgresqlFlexibleServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#delete DataProtectionBackupPolicyPostgresqlFlexibleServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#read DataProtectionBackupPolicyPostgresqlFlexibleServer#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#create DataProtectionBackupPolicyPostgresqlFlexibleServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#delete DataProtectionBackupPolicyPostgresqlFlexibleServer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.37.0/docs/resources/data_protection_backup_policy_postgresql_flexible_server#read DataProtectionBackupPolicyPostgresqlFlexibleServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get"></a>

```csharp
private DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```csharp
public string DataStoreTypeInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle">PutLifeCycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLifeCycle` <a name="PutLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle"></a>

```csharp
private void PutLifeCycle(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput">LifeCycleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList LifeCycle { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleLifeCycleList</a>

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput"></a>

```csharp
public object LifeCycleInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyPostgresqlFlexibleServerDefaultRetentionRule</a>

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">ResetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear">ResetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">ResetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsoluteCriteria` <a name="ResetAbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```csharp
private void ResetAbsoluteCriteria()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetMonthsOfYear` <a name="ResetMonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```csharp
private void ResetMonthsOfYear()
```

##### `ResetScheduledBackupTimes` <a name="ResetScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```csharp
private void ResetScheduledBackupTimes()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">AbsoluteCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">MonthsOfYearInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">ScheduledBackupTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteCriteriaInput`<sup>Optional</sup> <a name="AbsoluteCriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```csharp
public string AbsoluteCriteriaInput { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `MonthsOfYearInput`<sup>Optional</sup> <a name="MonthsOfYearInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```csharp
public string[] MonthsOfYearInput { get; }
```

- *Type:* string[]

---

##### `ScheduledBackupTimesInput`<sup>Optional</sup> <a name="ScheduledBackupTimesInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```csharp
public string[] ScheduledBackupTimesInput { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```csharp
public string[] WeeksOfMonthInput { get; }
```

- *Type:* string[]

---

##### `AbsoluteCriteria`<sup>Required</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```csharp
public string AbsoluteCriteria { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `MonthsOfYear`<sup>Required</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; }
```

- *Type:* string[]

---

##### `ScheduledBackupTimes`<sup>Required</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```csharp
public string[] ScheduledBackupTimes { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get"></a>

```csharp
private DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```csharp
public string DataStoreTypeInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get"></a>

```csharp
private DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle">PutLifeCycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteria` <a name="PutCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria"></a>

```csharp
private void PutCriteria(DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

---

##### `PutLifeCycle` <a name="PutLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle"></a>

```csharp
private void PutLifeCycle(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput">LifeCycleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteria"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteriaOutputReference</a>

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList LifeCycle { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleLifeCycleList</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput"></a>

```csharp
public DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria CriteriaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleCriteria</a>

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput"></a>

```csharp
public object LifeCycleInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerRetentionRuleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference <a name="DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyPostgresqlFlexibleServer.DataProtectionBackupPolicyPostgresqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



