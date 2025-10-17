# `dataProtectionBackupPolicyKubernetesCluster` Submodule <a name="`dataProtectionBackupPolicyKubernetesCluster` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupPolicyKubernetesCluster <a name="DataProtectionBackupPolicyKubernetesCluster" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster azurerm_data_protection_backup_policy_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesCluster(Construct Scope, string Id, DataProtectionBackupPolicyKubernetesClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig">DataProtectionBackupPolicyKubernetesClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig">DataProtectionBackupPolicyKubernetesClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putDefaultRetentionRule">PutDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putRetentionRule">PutRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetRetentionRule">ResetRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultRetentionRule` <a name="PutDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putDefaultRetentionRule"></a>

```csharp
private void PutDefaultRetentionRule(DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putDefaultRetentionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

---

##### `PutRetentionRule` <a name="PutRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putRetentionRule"></a>

```csharp
private void PutRetentionRule(IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRule[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putRetentionRule.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>[]

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(DataProtectionBackupPolicyKubernetesClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRetentionRule` <a name="ResetRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetRetentionRule"></a>

```csharp
private void ResetRetentionRule()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupPolicyKubernetesCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyKubernetesCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyKubernetesCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyKubernetesCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupPolicyKubernetesCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataProtectionBackupPolicyKubernetesCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupPolicyKubernetesCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupPolicyKubernetesCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupPolicyKubernetesCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRule">DefaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRule">RetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference">DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervalsInput">BackupRepeatingTimeIntervalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRuleInput">DefaultRetentionRuleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRuleInput">RetentionRuleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultNameInput">VaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultName">VaultName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `DefaultRetentionRule`<sup>Required</sup> <a name="DefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference DefaultRetentionRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference</a>

---

##### `RetentionRule`<sup>Required</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRule"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterRetentionRuleList RetentionRule { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference">DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference</a>

---

##### `BackupRepeatingTimeIntervalsInput`<sup>Optional</sup> <a name="BackupRepeatingTimeIntervalsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervalsInput"></a>

```csharp
public string[] BackupRepeatingTimeIntervalsInput { get; }
```

- *Type:* string[]

---

##### `DefaultRetentionRuleInput`<sup>Optional</sup> <a name="DefaultRetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.defaultRetentionRuleInput"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule DefaultRetentionRuleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `RetentionRuleInput`<sup>Optional</sup> <a name="RetentionRuleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.retentionRuleInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRule[] RetentionRuleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeoutsInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterTimeouts TimeoutsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `VaultNameInput`<sup>Optional</sup> <a name="VaultNameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultNameInput"></a>

```csharp
public string VaultNameInput { get; }
```

- *Type:* string

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.backupRepeatingTimeIntervals"></a>

```csharp
public string[] BackupRepeatingTimeIntervals { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.vaultName"></a>

```csharp
public string VaultName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupPolicyKubernetesClusterConfig <a name="DataProtectionBackupPolicyKubernetesClusterConfig" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] BackupRepeatingTimeIntervals,
    DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule DefaultRetentionRule,
    string Name,
    string ResourceGroupName,
    string VaultName,
    string Id = null,
    IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRule[] RetentionRule = null,
    DataProtectionBackupPolicyKubernetesClusterTimeouts Timeouts = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.backupRepeatingTimeIntervals">BackupRepeatingTimeIntervals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#backup_repeating_time_intervals DataProtectionBackupPolicyKubernetesCluster#backup_repeating_time_intervals}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.defaultRetentionRule">DefaultRetentionRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a></code> | default_retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#resource_group_name DataProtectionBackupPolicyKubernetesCluster#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.vaultName">VaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#vault_name DataProtectionBackupPolicyKubernetesCluster#vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#id DataProtectionBackupPolicyKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.retentionRule">RetentionRule</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>[]</code> | retention_rule block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#time_zone DataProtectionBackupPolicyKubernetesCluster#time_zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `BackupRepeatingTimeIntervals`<sup>Required</sup> <a name="BackupRepeatingTimeIntervals" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.backupRepeatingTimeIntervals"></a>

```csharp
public string[] BackupRepeatingTimeIntervals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#backup_repeating_time_intervals DataProtectionBackupPolicyKubernetesCluster#backup_repeating_time_intervals}.

---

##### `DefaultRetentionRule`<sup>Required</sup> <a name="DefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.defaultRetentionRule"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule DefaultRetentionRule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

default_retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#default_retention_rule DataProtectionBackupPolicyKubernetesCluster#default_retention_rule}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#resource_group_name DataProtectionBackupPolicyKubernetesCluster#resource_group_name}.

---

##### `VaultName`<sup>Required</sup> <a name="VaultName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.vaultName"></a>

```csharp
public string VaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#vault_name DataProtectionBackupPolicyKubernetesCluster#vault_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#id DataProtectionBackupPolicyKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionRule`<sup>Optional</sup> <a name="RetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.retentionRule"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRule[] RetentionRule { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>[]

retention_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#retention_rule DataProtectionBackupPolicyKubernetesCluster#retention_rule}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeouts"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#timeouts DataProtectionBackupPolicyKubernetesCluster#timeouts}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#time_zone DataProtectionBackupPolicyKubernetesCluster#time_zone}.

---

### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule {
    IResolvable|DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle[] LifeCycle
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule.property.lifeCycle">LifeCycle</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>[]</code> | life_cycle block. |

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule.property.lifeCycle"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle[] LifeCycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>[]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#life_cycle DataProtectionBackupPolicyKubernetesCluster#life_cycle}

---

### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle {
    string DataStoreType,
    string Duration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}. |

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}.

---

### DataProtectionBackupPolicyKubernetesClusterRetentionRule <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRule" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterRetentionRule {
    DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria Criteria,
    IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle[] LifeCycle,
    string Name,
    double Priority
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a></code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.lifeCycle">LifeCycle</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>[]</code> | life_cycle block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#priority DataProtectionBackupPolicyKubernetesCluster#priority}. |

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.criteria"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria Criteria { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a>

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#criteria DataProtectionBackupPolicyKubernetesCluster#criteria}

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.lifeCycle"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle[] LifeCycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>[]

life_cycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#life_cycle DataProtectionBackupPolicyKubernetesCluster#life_cycle}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#name DataProtectionBackupPolicyKubernetesCluster#name}.

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#priority DataProtectionBackupPolicyKubernetesCluster#priority}.

---

### DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria {
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
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#absolute_criteria DataProtectionBackupPolicyKubernetesCluster#absolute_criteria}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#days_of_week DataProtectionBackupPolicyKubernetesCluster#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#months_of_year DataProtectionBackupPolicyKubernetesCluster#months_of_year}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#scheduled_backup_times DataProtectionBackupPolicyKubernetesCluster#scheduled_backup_times}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#weeks_of_month DataProtectionBackupPolicyKubernetesCluster#weeks_of_month}. |

---

##### `AbsoluteCriteria`<sup>Optional</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.absoluteCriteria"></a>

```csharp
public string AbsoluteCriteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#absolute_criteria DataProtectionBackupPolicyKubernetesCluster#absolute_criteria}.

---

##### `DaysOfWeek`<sup>Optional</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#days_of_week DataProtectionBackupPolicyKubernetesCluster#days_of_week}.

---

##### `MonthsOfYear`<sup>Optional</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#months_of_year DataProtectionBackupPolicyKubernetesCluster#months_of_year}.

---

##### `ScheduledBackupTimes`<sup>Optional</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.scheduledBackupTimes"></a>

```csharp
public string[] ScheduledBackupTimes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#scheduled_backup_times DataProtectionBackupPolicyKubernetesCluster#scheduled_backup_times}.

---

##### `WeeksOfMonth`<sup>Optional</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#weeks_of_month DataProtectionBackupPolicyKubernetesCluster#weeks_of_month}.

---

### DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle {
    string DataStoreType,
    string Duration
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.duration">Duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}. |

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#data_store_type DataProtectionBackupPolicyKubernetesCluster#data_store_type}.

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#duration DataProtectionBackupPolicyKubernetesCluster#duration}.

---

### DataProtectionBackupPolicyKubernetesClusterTimeouts <a name="DataProtectionBackupPolicyKubernetesClusterTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#create DataProtectionBackupPolicyKubernetesCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#delete DataProtectionBackupPolicyKubernetesCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#read DataProtectionBackupPolicyKubernetesCluster#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#create DataProtectionBackupPolicyKubernetesCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#delete DataProtectionBackupPolicyKubernetesCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/data_protection_backup_policy_kubernetes_cluster#read DataProtectionBackupPolicyKubernetesCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.get"></a>

```csharp
private DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>[]

---


### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```csharp
public string DataStoreTypeInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>

---


### DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.putLifeCycle">PutLifeCycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLifeCycle` <a name="PutLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.putLifeCycle"></a>

```csharp
private void PutLifeCycle(IResolvable|DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycleInput">LifeCycleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycle"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList LifeCycle { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycleList</a>

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.lifeCycleInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle[] LifeCycleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleLifeCycle</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRuleOutputReference.property.internalValue"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule">DataProtectionBackupPolicyKubernetesClusterDefaultRetentionRule</a>

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria">ResetAbsoluteCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetDaysOfWeek">ResetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetMonthsOfYear">ResetMonthsOfYear</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes">ResetScheduledBackupTimes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetWeeksOfMonth">ResetWeeksOfMonth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAbsoluteCriteria` <a name="ResetAbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetAbsoluteCriteria"></a>

```csharp
private void ResetAbsoluteCriteria()
```

##### `ResetDaysOfWeek` <a name="ResetDaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetDaysOfWeek"></a>

```csharp
private void ResetDaysOfWeek()
```

##### `ResetMonthsOfYear` <a name="ResetMonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetMonthsOfYear"></a>

```csharp
private void ResetMonthsOfYear()
```

##### `ResetScheduledBackupTimes` <a name="ResetScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetScheduledBackupTimes"></a>

```csharp
private void ResetScheduledBackupTimes()
```

##### `ResetWeeksOfMonth` <a name="ResetWeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.resetWeeksOfMonth"></a>

```csharp
private void ResetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput">AbsoluteCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYearInput">MonthsOfYearInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput">ScheduledBackupTimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput">WeeksOfMonthInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteria">AbsoluteCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYear">MonthsOfYear</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes">ScheduledBackupTimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonth">WeeksOfMonth</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbsoluteCriteriaInput`<sup>Optional</sup> <a name="AbsoluteCriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteriaInput"></a>

```csharp
public string AbsoluteCriteriaInput { get; }
```

- *Type:* string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeekInput"></a>

```csharp
public string[] DaysOfWeekInput { get; }
```

- *Type:* string[]

---

##### `MonthsOfYearInput`<sup>Optional</sup> <a name="MonthsOfYearInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYearInput"></a>

```csharp
public string[] MonthsOfYearInput { get; }
```

- *Type:* string[]

---

##### `ScheduledBackupTimesInput`<sup>Optional</sup> <a name="ScheduledBackupTimesInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimesInput"></a>

```csharp
public string[] ScheduledBackupTimesInput { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonthInput`<sup>Optional</sup> <a name="WeeksOfMonthInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonthInput"></a>

```csharp
public string[] WeeksOfMonthInput { get; }
```

- *Type:* string[]

---

##### `AbsoluteCriteria`<sup>Required</sup> <a name="AbsoluteCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.absoluteCriteria"></a>

```csharp
public string AbsoluteCriteria { get; }
```

- *Type:* string

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.daysOfWeek"></a>

```csharp
public string[] DaysOfWeek { get; }
```

- *Type:* string[]

---

##### `MonthsOfYear`<sup>Required</sup> <a name="MonthsOfYear" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.monthsOfYear"></a>

```csharp
public string[] MonthsOfYear { get; }
```

- *Type:* string[]

---

##### `ScheduledBackupTimes`<sup>Required</sup> <a name="ScheduledBackupTimes" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.scheduledBackupTimes"></a>

```csharp
public string[] ScheduledBackupTimes { get; }
```

- *Type:* string[]

---

##### `WeeksOfMonth`<sup>Required</sup> <a name="WeeksOfMonth" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.weeksOfMonth"></a>

```csharp
public string[] WeeksOfMonth { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference.property.internalValue"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a>

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.get"></a>

```csharp
private DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>[]

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput">DataStoreTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreType">DataStoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStoreTypeInput`<sup>Optional</sup> <a name="DataStoreTypeInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreTypeInput"></a>

```csharp
public string DataStoreTypeInput { get; }
```

- *Type:* string

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `DataStoreType`<sup>Required</sup> <a name="DataStoreType" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.dataStoreType"></a>

```csharp
public string DataStoreType { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleList <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleList" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterRetentionRuleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.get"></a>

```csharp
private DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleList.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRule[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>[]

---


### DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putLifeCycle">PutLifeCycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCriteria` <a name="PutCriteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria"></a>

```csharp
private void PutCriteria(DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a>

---

##### `PutLifeCycle` <a name="PutLifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putLifeCycle"></a>

```csharp
private void PutLifeCycle(IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.putLifeCycle.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycle">LifeCycle</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycleInput">LifeCycleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteria"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteriaOutputReference</a>

---

##### `LifeCycle`<sup>Required</sup> <a name="LifeCycle" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycle"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList LifeCycle { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycleList</a>

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.criteriaInput"></a>

```csharp
public DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria CriteriaInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria">DataProtectionBackupPolicyKubernetesClusterRetentionRuleCriteria</a>

---

##### `LifeCycleInput`<sup>Optional</sup> <a name="LifeCycleInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.lifeCycleInput"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle[] LifeCycleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle">DataProtectionBackupPolicyKubernetesClusterRetentionRuleLifeCycle</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterRetentionRule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterRetentionRule">DataProtectionBackupPolicyKubernetesClusterRetentionRule</a>

---


### DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference <a name="DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataProtectionBackupPolicyKubernetesClusterTimeouts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-azurerm.dataProtectionBackupPolicyKubernetesCluster.DataProtectionBackupPolicyKubernetesClusterTimeouts">DataProtectionBackupPolicyKubernetesClusterTimeouts</a>

---



