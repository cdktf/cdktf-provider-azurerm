# `dataProtectionBackupPolicyMysqlFlexibleServer` Submodule <a name="`dataProtectionBackupPolicyMysqlFlexibleServer` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyMysqlFlexibleServer <a name="DataProtectionBackupPolicyMysqlFlexibleServer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server azurerm_data_protection_backup_policy_mysql_flexible_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServer(Construct Scope, string Id, DataProtectionBackupPolicyMysqlFlexibleServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig">DataProtectionBackupPolicyMysqlFlexibleServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig">DataProtectionBackupPolicyMysqlFlexibleServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putDefaultRetentionRule">PutDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putRetentionRule">PutRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetRetentionRule">ResetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultRetentionRule` <a name="PutDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putDefaultRetentionRule"></a>

```csharp
private void PutDefaultRetentionRule(DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putDefaultRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

---

##### `PutRetentionRule` <a name="PutRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putRetentionRule"></a>

```csharp
private void PutRetentionRule(IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putRetentionRule.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putTimeouts"></a>

```csharp
private void PutTimeouts(DataProtectionBackupPolicyMysqlFlexibleServerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRetentionRule` <a name="ResetRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetRetentionRule"></a>

```csharp
private void ResetRetentionRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyMysqlFlexibleServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyMysqlFlexibleServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyMysqlFlexibleServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyMysqlFlexibleServer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyMysqlFlexibleServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataProtectionBackupPolicyMysqlFlexibleServer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupPolicyMysqlFlexibleServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupPolicyMysqlFlexibleServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyMysqlFlexibleServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRule">DefaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRule">RetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervalsInput">BackupRepeatingTimeIntervalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRuleInput">DefaultRetentionRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRuleInput">RetentionRuleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `DefaultRetentionRule`<sup>Required</sup> <a name="DefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference DefaultRetentionRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference</a>

---

##### `RetentionRule`<sup>Required</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRule"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList RetentionRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference</a>

---

##### `BackupRepeatingTimeIntervalsInput`<sup>Optional</sup> <a name="BackupRepeatingTimeIntervalsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervalsInput"></a>

```csharp
public string[] BackupRepeatingTimeIntervalsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRetentionRuleInput`<sup>Optional</sup> <a name="DefaultRetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.defaultRetentionRuleInput"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule DefaultRetentionRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RetentionRuleInput`<sup>Optional</sup> <a name="RetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.retentionRuleInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule[] RetentionRuleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeoutsInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.backupRepeatingTimeIntervals"></a>

```csharp
public string[] BackupRepeatingTimeIntervals { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyMysqlFlexibleServerConfig <a name="DataProtectionBackupPolicyMysqlFlexibleServerConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] BackupRepeatingTimeIntervals,
    DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule DefaultRetentionRule,
    string Name,
    string VaultId,
    string Id = null,
    IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule[] RetentionRule = null,
    DataProtectionBackupPolicyMysqlFlexibleServerTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyMysqlFlexibleServer#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.defaultRetentionRule">DefaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#vault_id DataProtectionBackupPolicyMysqlFlexibleServer#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#id DataProtectionBackupPolicyMysqlFlexibleServer#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.retentionRule">RetentionRule</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#time_zone DataProtectionBackupPolicyMysqlFlexibleServer#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.backupRepeatingTimeIntervals"></a>

```csharp
public string[] BackupRepeatingTimeIntervals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#backup_repeating_time_intervals DataProtectionBackupPolicyMysqlFlexibleServer#backup_repeating_time_intervals}.

---

##### `DefaultRetentionRule`<sup>Required</sup> <a name="DefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.defaultRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule DefaultRetentionRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#default_retention_rule DataProtectionBackupPolicyMysqlFlexibleServer#default_retention_rule}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#vault_id DataProtectionBackupPolicyMysqlFlexibleServer#vault_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#id DataProtectionBackupPolicyMysqlFlexibleServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionRule`<sup>Optional</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.retentionRule"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule[] RetentionRule { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#retention_rule DataProtectionBackupPolicyMysqlFlexibleServer#retention_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#timeouts DataProtectionBackupPolicyMysqlFlexibleServer#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#time_zone DataProtectionBackupPolicyMysqlFlexibleServer#time_zone}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule {
    IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle[] LifeCycle
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule.property.lifeCycle">LifeCycle</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]</code> | life_cycle block. |

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule.property.lifeCycle"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle[] LifeCycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#life_cycle DataProtectionBackupPolicyMysqlFlexibleServer#life_cycle}

---

### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle {
    string DataStoreType,
    string Duration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}. |

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule {
    DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria Criteria,
    IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle[] LifeCycle,
    string Name,
    double Priority
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.lifeCycle">LifeCycle</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]</code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#priority DataProtectionBackupPolicyMysqlFlexibleServer#priority}. |

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.criteria"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria Criteria { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#criteria DataProtectionBackupPolicyMysqlFlexibleServer#criteria}

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.lifeCycle"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle[] LifeCycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#life_cycle DataProtectionBackupPolicyMysqlFlexibleServer#life_cycle}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#name DataProtectionBackupPolicyMysqlFlexibleServer#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#priority DataProtectionBackupPolicyMysqlFlexibleServer#priority}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria {
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
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#absolute_criteria DataProtectionBackupPolicyMysqlFlexibleServer#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#days_of_week DataProtectionBackupPolicyMysqlFlexibleServer#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#months_of_year DataProtectionBackupPolicyMysqlFlexibleServer#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyMysqlFlexibleServer#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#weeks_of_month DataProtectionBackupPolicyMysqlFlexibleServer#weeks_of_month}. |

---

##### `AbsoluteCriteria`<sup>Optional</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.absoluteCriteria"></a>

```csharp
public string AbsoluteCriteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#absolute_criteria DataProtectionBackupPolicyMysqlFlexibleServer#absolute_criteria}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#days_of_week DataProtectionBackupPolicyMysqlFlexibleServer#days_of_week}.

---

##### `MonthsOfYear`<sup>Optional</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#months_of_year DataProtectionBackupPolicyMysqlFlexibleServer#months_of_year}.

---

##### `ScheduledBackupTimes`<sup>Optional</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```csharp
public string[] ScheduledBackupTimes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#scheduled_backup_times DataProtectionBackupPolicyMysqlFlexibleServer#scheduled_backup_times}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#weeks_of_month DataProtectionBackupPolicyMysqlFlexibleServer#weeks_of_month}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle {
    string DataStoreType,
    string Duration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}. |

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#data_store_type DataProtectionBackupPolicyMysqlFlexibleServer#data_store_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#duration DataProtectionBackupPolicyMysqlFlexibleServer#duration}.

---

### DataProtectionBackupPolicyMysqlFlexibleServerTimeouts <a name="DataProtectionBackupPolicyMysqlFlexibleServerTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#create DataProtectionBackupPolicyMysqlFlexibleServer#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#delete DataProtectionBackupPolicyMysqlFlexibleServer#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#read DataProtectionBackupPolicyMysqlFlexibleServer#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#create DataProtectionBackupPolicyMysqlFlexibleServer#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#delete DataProtectionBackupPolicyMysqlFlexibleServer#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.48.0/docs/resources/data_protection_backup_policy_mysql_flexible_server#read DataProtectionBackupPolicyMysqlFlexibleServer#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.get"></a>

```csharp
private DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

---


### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```csharp
public string DataStoreTypeInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle">PutLifeCycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLifeCycle` <a name="PutLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle"></a>

```csharp
private void PutLifeCycle(IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput">LifeCycleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycle"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList LifeCycle { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycleList</a>

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.lifeCycleInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle[] LifeCycleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleLifeCycle</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRuleOutputReference.property.internalValue"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerDefaultRetentionRule</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">ResetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear">ResetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">ResetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsoluteCriteria` <a name="ResetAbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```csharp
private void ResetAbsoluteCriteria()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetMonthsOfYear` <a name="ResetMonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```csharp
private void ResetMonthsOfYear()
```

##### `ResetScheduledBackupTimes` <a name="ResetScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```csharp
private void ResetScheduledBackupTimes()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">AbsoluteCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">MonthsOfYearInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">ScheduledBackupTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteCriteriaInput`<sup>Optional</sup> <a name="AbsoluteCriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```csharp
public string AbsoluteCriteriaInput { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `MonthsOfYearInput`<sup>Optional</sup> <a name="MonthsOfYearInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```csharp
public string[] MonthsOfYearInput { get; }
```

- *Type:* string[]

---

##### `ScheduledBackupTimesInput`<sup>Optional</sup> <a name="ScheduledBackupTimesInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```csharp
public string[] ScheduledBackupTimesInput { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```csharp
public string[] WeeksOfMonthInput { get; }
```

- *Type:* string[]

---

##### `AbsoluteCriteria`<sup>Required</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```csharp
public string AbsoluteCriteria { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `MonthsOfYear`<sup>Required</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; }
```

- *Type:* string[]

---

##### `ScheduledBackupTimes`<sup>Required</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```csharp
public string[] ScheduledBackupTimes { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.get"></a>

```csharp
private DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```csharp
public string DataStoreTypeInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.get"></a>

```csharp
private DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleList.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>[]

---


### DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putLifeCycle">PutLifeCycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteria` <a name="PutCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria"></a>

```csharp
private void PutCriteria(DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a>

---

##### `PutLifeCycle` <a name="PutLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putLifeCycle"></a>

```csharp
private void PutLifeCycle(IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput">LifeCycleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteria"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteriaOutputReference</a>

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycle"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList LifeCycle { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycleList</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.criteriaInput"></a>

```csharp
public DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria CriteriaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleCriteria</a>

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.lifeCycleInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle[] LifeCycleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleLifeCycle</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule">DataProtectionBackupPolicyMysqlFlexibleServerRetentionRule</a>

---


### DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference <a name="DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyMysqlFlexibleServerTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyMysqlFlexibleServer.DataProtectionBackupPolicyMysqlFlexibleServerTimeouts">DataProtectionBackupPolicyMysqlFlexibleServerTimeouts</a>

---



