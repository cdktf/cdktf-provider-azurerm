# `dataProtectionBackupInstanceKubernetesCluster` Submodule <a name="`dataProtectionBackupInstanceKubernetesCluster` Submodule" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataProtectionBackupInstanceKubernetesCluster <a name="DataProtectionBackupInstanceKubernetesCluster" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster azurerm_data_protection_backup_instance_kubernetes_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupInstanceKubernetesCluster(Construct Scope, string Id, DataProtectionBackupInstanceKubernetesClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig">DataProtectionBackupInstanceKubernetesClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig">DataProtectionBackupInstanceKubernetesClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putBackupDatasourceParameters">PutBackupDatasourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetBackupDatasourceParameters">ResetBackupDatasourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupDatasourceParameters` <a name="PutBackupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putBackupDatasourceParameters"></a>

```csharp
private void PutBackupDatasourceParameters(DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putBackupDatasourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putTimeouts"></a>

```csharp
private void PutTimeouts(DataProtectionBackupInstanceKubernetesClusterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a>

---

##### `ResetBackupDatasourceParameters` <a name="ResetBackupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetBackupDatasourceParameters"></a>

```csharp
private void ResetBackupDatasourceParameters()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataProtectionBackupInstanceKubernetesCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupInstanceKubernetesCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupInstanceKubernetesCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupInstanceKubernetesCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataProtectionBackupInstanceKubernetesCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataProtectionBackupInstanceKubernetesCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataProtectionBackupInstanceKubernetesCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataProtectionBackupInstanceKubernetesCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataProtectionBackupInstanceKubernetesCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParameters">BackupDatasourceParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference">DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParametersInput">BackupDatasourceParametersInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyIdInput">BackupPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterIdInput">KubernetesClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupNameInput">SnapshotResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyId">BackupPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupName">SnapshotResourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BackupDatasourceParameters`<sup>Required</sup> <a name="BackupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParameters"></a>

```csharp
public DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference BackupDatasourceParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeouts"></a>

```csharp
public DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference">DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference</a>

---

##### `BackupDatasourceParametersInput`<sup>Optional</sup> <a name="BackupDatasourceParametersInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupDatasourceParametersInput"></a>

```csharp
public DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters BackupDatasourceParametersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

---

##### `BackupPolicyIdInput`<sup>Optional</sup> <a name="BackupPolicyIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyIdInput"></a>

```csharp
public string BackupPolicyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KubernetesClusterIdInput`<sup>Optional</sup> <a name="KubernetesClusterIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterIdInput"></a>

```csharp
public string KubernetesClusterIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SnapshotResourceGroupNameInput`<sup>Optional</sup> <a name="SnapshotResourceGroupNameInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupNameInput"></a>

```csharp
public string SnapshotResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.backupPolicyId"></a>

```csharp
public string BackupPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.kubernetesClusterId"></a>

```csharp
public string KubernetesClusterId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SnapshotResourceGroupName`<sup>Required</sup> <a name="SnapshotResourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.snapshotResourceGroupName"></a>

```csharp
public string SnapshotResourceGroupName { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters <a name="DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters {
    object ClusterScopedResourcesEnabled = null,
    string[] ExcludedNamespaces = null,
    string[] ExcludedResourceTypes = null,
    string[] IncludedNamespaces = null,
    string[] IncludedResourceTypes = null,
    string[] LabelSelectors = null,
    object VolumeSnapshotEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.clusterScopedResourcesEnabled">ClusterScopedResourcesEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#cluster_scoped_resources_enabled DataProtectionBackupInstanceKubernetesCluster#cluster_scoped_resources_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_namespaces DataProtectionBackupInstanceKubernetesCluster#excluded_namespaces}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedResourceTypes">ExcludedResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_resource_types DataProtectionBackupInstanceKubernetesCluster#excluded_resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedNamespaces">IncludedNamespaces</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_namespaces DataProtectionBackupInstanceKubernetesCluster#included_namespaces}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedResourceTypes">IncludedResourceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_resource_types DataProtectionBackupInstanceKubernetesCluster#included_resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.labelSelectors">LabelSelectors</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#label_selectors DataProtectionBackupInstanceKubernetesCluster#label_selectors}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.volumeSnapshotEnabled">VolumeSnapshotEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#volume_snapshot_enabled DataProtectionBackupInstanceKubernetesCluster#volume_snapshot_enabled}. |

---

##### `ClusterScopedResourcesEnabled`<sup>Optional</sup> <a name="ClusterScopedResourcesEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.clusterScopedResourcesEnabled"></a>

```csharp
public object ClusterScopedResourcesEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#cluster_scoped_resources_enabled DataProtectionBackupInstanceKubernetesCluster#cluster_scoped_resources_enabled}.

---

##### `ExcludedNamespaces`<sup>Optional</sup> <a name="ExcludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedNamespaces"></a>

```csharp
public string[] ExcludedNamespaces { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_namespaces DataProtectionBackupInstanceKubernetesCluster#excluded_namespaces}.

---

##### `ExcludedResourceTypes`<sup>Optional</sup> <a name="ExcludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.excludedResourceTypes"></a>

```csharp
public string[] ExcludedResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#excluded_resource_types DataProtectionBackupInstanceKubernetesCluster#excluded_resource_types}.

---

##### `IncludedNamespaces`<sup>Optional</sup> <a name="IncludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedNamespaces"></a>

```csharp
public string[] IncludedNamespaces { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_namespaces DataProtectionBackupInstanceKubernetesCluster#included_namespaces}.

---

##### `IncludedResourceTypes`<sup>Optional</sup> <a name="IncludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.includedResourceTypes"></a>

```csharp
public string[] IncludedResourceTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#included_resource_types DataProtectionBackupInstanceKubernetesCluster#included_resource_types}.

---

##### `LabelSelectors`<sup>Optional</sup> <a name="LabelSelectors" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.labelSelectors"></a>

```csharp
public string[] LabelSelectors { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#label_selectors DataProtectionBackupInstanceKubernetesCluster#label_selectors}.

---

##### `VolumeSnapshotEnabled`<sup>Optional</sup> <a name="VolumeSnapshotEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters.property.volumeSnapshotEnabled"></a>

```csharp
public object VolumeSnapshotEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#volume_snapshot_enabled DataProtectionBackupInstanceKubernetesCluster#volume_snapshot_enabled}.

---

### DataProtectionBackupInstanceKubernetesClusterConfig <a name="DataProtectionBackupInstanceKubernetesClusterConfig" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupInstanceKubernetesClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BackupPolicyId,
    string KubernetesClusterId,
    string Location,
    string Name,
    string SnapshotResourceGroupName,
    string VaultId,
    DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters BackupDatasourceParameters = null,
    string Id = null,
    DataProtectionBackupInstanceKubernetesClusterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupPolicyId">BackupPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_policy_id DataProtectionBackupInstanceKubernetesCluster#backup_policy_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#kubernetes_cluster_id DataProtectionBackupInstanceKubernetesCluster#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#location DataProtectionBackupInstanceKubernetesCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#name DataProtectionBackupInstanceKubernetesCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.snapshotResourceGroupName">SnapshotResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#snapshot_resource_group_name DataProtectionBackupInstanceKubernetesCluster#snapshot_resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#vault_id DataProtectionBackupInstanceKubernetesCluster#vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupDatasourceParameters">BackupDatasourceParameters</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a></code> | backup_datasource_parameters block. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#id DataProtectionBackupInstanceKubernetesCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BackupPolicyId`<sup>Required</sup> <a name="BackupPolicyId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupPolicyId"></a>

```csharp
public string BackupPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_policy_id DataProtectionBackupInstanceKubernetesCluster#backup_policy_id}.

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.kubernetesClusterId"></a>

```csharp
public string KubernetesClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#kubernetes_cluster_id DataProtectionBackupInstanceKubernetesCluster#kubernetes_cluster_id}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#location DataProtectionBackupInstanceKubernetesCluster#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#name DataProtectionBackupInstanceKubernetesCluster#name}.

---

##### `SnapshotResourceGroupName`<sup>Required</sup> <a name="SnapshotResourceGroupName" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.snapshotResourceGroupName"></a>

```csharp
public string SnapshotResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#snapshot_resource_group_name DataProtectionBackupInstanceKubernetesCluster#snapshot_resource_group_name}.

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#vault_id DataProtectionBackupInstanceKubernetesCluster#vault_id}.

---

##### `BackupDatasourceParameters`<sup>Optional</sup> <a name="BackupDatasourceParameters" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.backupDatasourceParameters"></a>

```csharp
public DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters BackupDatasourceParameters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

backup_datasource_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#backup_datasource_parameters DataProtectionBackupInstanceKubernetesCluster#backup_datasource_parameters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#id DataProtectionBackupInstanceKubernetesCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterConfig.property.timeouts"></a>

```csharp
public DataProtectionBackupInstanceKubernetesClusterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts">DataProtectionBackupInstanceKubernetesClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#timeouts DataProtectionBackupInstanceKubernetesCluster#timeouts}

---

### DataProtectionBackupInstanceKubernetesClusterTimeouts <a name="DataProtectionBackupInstanceKubernetesClusterTimeouts" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupInstanceKubernetesClusterTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#create DataProtectionBackupInstanceKubernetesCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#delete DataProtectionBackupInstanceKubernetesCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#read DataProtectionBackupInstanceKubernetesCluster#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#create DataProtectionBackupInstanceKubernetesCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#delete DataProtectionBackupInstanceKubernetesCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/data_protection_backup_instance_kubernetes_cluster#read DataProtectionBackupInstanceKubernetesCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference <a name="DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetClusterScopedResourcesEnabled">ResetClusterScopedResourcesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedNamespaces">ResetExcludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedResourceTypes">ResetExcludedResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedNamespaces">ResetIncludedNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedResourceTypes">ResetIncludedResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetLabelSelectors">ResetLabelSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetVolumeSnapshotEnabled">ResetVolumeSnapshotEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterScopedResourcesEnabled` <a name="ResetClusterScopedResourcesEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetClusterScopedResourcesEnabled"></a>

```csharp
private void ResetClusterScopedResourcesEnabled()
```

##### `ResetExcludedNamespaces` <a name="ResetExcludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedNamespaces"></a>

```csharp
private void ResetExcludedNamespaces()
```

##### `ResetExcludedResourceTypes` <a name="ResetExcludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetExcludedResourceTypes"></a>

```csharp
private void ResetExcludedResourceTypes()
```

##### `ResetIncludedNamespaces` <a name="ResetIncludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedNamespaces"></a>

```csharp
private void ResetIncludedNamespaces()
```

##### `ResetIncludedResourceTypes` <a name="ResetIncludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetIncludedResourceTypes"></a>

```csharp
private void ResetIncludedResourceTypes()
```

##### `ResetLabelSelectors` <a name="ResetLabelSelectors" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetLabelSelectors"></a>

```csharp
private void ResetLabelSelectors()
```

##### `ResetVolumeSnapshotEnabled` <a name="ResetVolumeSnapshotEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.resetVolumeSnapshotEnabled"></a>

```csharp
private void ResetVolumeSnapshotEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabledInput">ClusterScopedResourcesEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespacesInput">ExcludedNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypesInput">ExcludedResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespacesInput">IncludedNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypesInput">IncludedResourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectorsInput">LabelSelectorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabledInput">VolumeSnapshotEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabled">ClusterScopedResourcesEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespaces">ExcludedNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypes">ExcludedResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespaces">IncludedNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypes">IncludedResourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectors">LabelSelectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabled">VolumeSnapshotEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterScopedResourcesEnabledInput`<sup>Optional</sup> <a name="ClusterScopedResourcesEnabledInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabledInput"></a>

```csharp
public object ClusterScopedResourcesEnabledInput { get; }
```

- *Type:* object

---

##### `ExcludedNamespacesInput`<sup>Optional</sup> <a name="ExcludedNamespacesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespacesInput"></a>

```csharp
public string[] ExcludedNamespacesInput { get; }
```

- *Type:* string[]

---

##### `ExcludedResourceTypesInput`<sup>Optional</sup> <a name="ExcludedResourceTypesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypesInput"></a>

```csharp
public string[] ExcludedResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `IncludedNamespacesInput`<sup>Optional</sup> <a name="IncludedNamespacesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespacesInput"></a>

```csharp
public string[] IncludedNamespacesInput { get; }
```

- *Type:* string[]

---

##### `IncludedResourceTypesInput`<sup>Optional</sup> <a name="IncludedResourceTypesInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypesInput"></a>

```csharp
public string[] IncludedResourceTypesInput { get; }
```

- *Type:* string[]

---

##### `LabelSelectorsInput`<sup>Optional</sup> <a name="LabelSelectorsInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectorsInput"></a>

```csharp
public string[] LabelSelectorsInput { get; }
```

- *Type:* string[]

---

##### `VolumeSnapshotEnabledInput`<sup>Optional</sup> <a name="VolumeSnapshotEnabledInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabledInput"></a>

```csharp
public object VolumeSnapshotEnabledInput { get; }
```

- *Type:* object

---

##### `ClusterScopedResourcesEnabled`<sup>Required</sup> <a name="ClusterScopedResourcesEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.clusterScopedResourcesEnabled"></a>

```csharp
public object ClusterScopedResourcesEnabled { get; }
```

- *Type:* object

---

##### `ExcludedNamespaces`<sup>Required</sup> <a name="ExcludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedNamespaces"></a>

```csharp
public string[] ExcludedNamespaces { get; }
```

- *Type:* string[]

---

##### `ExcludedResourceTypes`<sup>Required</sup> <a name="ExcludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.excludedResourceTypes"></a>

```csharp
public string[] ExcludedResourceTypes { get; }
```

- *Type:* string[]

---

##### `IncludedNamespaces`<sup>Required</sup> <a name="IncludedNamespaces" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedNamespaces"></a>

```csharp
public string[] IncludedNamespaces { get; }
```

- *Type:* string[]

---

##### `IncludedResourceTypes`<sup>Required</sup> <a name="IncludedResourceTypes" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.includedResourceTypes"></a>

```csharp
public string[] IncludedResourceTypes { get; }
```

- *Type:* string[]

---

##### `LabelSelectors`<sup>Required</sup> <a name="LabelSelectors" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.labelSelectors"></a>

```csharp
public string[] LabelSelectors { get; }
```

- *Type:* string[]

---

##### `VolumeSnapshotEnabled`<sup>Required</sup> <a name="VolumeSnapshotEnabled" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.volumeSnapshotEnabled"></a>

```csharp
public object VolumeSnapshotEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParametersOutputReference.property.internalValue"></a>

```csharp
public DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters">DataProtectionBackupInstanceKubernetesClusterBackupDatasourceParameters</a>

---


### DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference <a name="DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataProtectionBackupInstanceKubernetesCluster.DataProtectionBackupInstanceKubernetesClusterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



