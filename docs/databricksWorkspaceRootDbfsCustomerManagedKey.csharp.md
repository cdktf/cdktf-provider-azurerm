# `databricksWorkspaceRootDbfsCustomerManagedKey` Submodule <a name="`databricksWorkspaceRootDbfsCustomerManagedKey` Submodule" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksWorkspaceRootDbfsCustomerManagedKey <a name="DatabricksWorkspaceRootDbfsCustomerManagedKey" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key azurerm_databricks_workspace_root_dbfs_customer_managed_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceRootDbfsCustomerManagedKey(Construct Scope, string Id, DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig">DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig">DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetKeyVaultId">ResetKeyVaultId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.putTimeouts"></a>

```csharp
private void PutTimeouts(DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKeyVaultId` <a name="ResetKeyVaultId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetKeyVaultId"></a>

```csharp
private void ResetKeyVaultId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabricksWorkspaceRootDbfsCustomerManagedKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatabricksWorkspaceRootDbfsCustomerManagedKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatabricksWorkspaceRootDbfsCustomerManagedKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatabricksWorkspaceRootDbfsCustomerManagedKey.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DatabricksWorkspaceRootDbfsCustomerManagedKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabricksWorkspaceRootDbfsCustomerManagedKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabricksWorkspaceRootDbfsCustomerManagedKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabricksWorkspaceRootDbfsCustomerManagedKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabricksWorkspaceRootDbfsCustomerManagedKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultKeyIdInput">KeyVaultKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.timeouts"></a>

```csharp
public DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `KeyVaultKeyIdInput`<sup>Optional</sup> <a name="KeyVaultKeyIdInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultKeyIdInput"></a>

```csharp
public string KeyVaultKeyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig <a name="DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyVaultKeyId,
    string WorkspaceId,
    string Id = null,
    string KeyVaultId = null,
    DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.keyVaultKeyId">KeyVaultKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#key_vault_key_id DatabricksWorkspaceRootDbfsCustomerManagedKey#key_vault_key_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#workspace_id DatabricksWorkspaceRootDbfsCustomerManagedKey#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#id DatabricksWorkspaceRootDbfsCustomerManagedKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#key_vault_id DatabricksWorkspaceRootDbfsCustomerManagedKey#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyVaultKeyId`<sup>Required</sup> <a name="KeyVaultKeyId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.keyVaultKeyId"></a>

```csharp
public string KeyVaultKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#key_vault_key_id DatabricksWorkspaceRootDbfsCustomerManagedKey#key_vault_key_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#workspace_id DatabricksWorkspaceRootDbfsCustomerManagedKey#workspace_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#id DatabricksWorkspaceRootDbfsCustomerManagedKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KeyVaultId`<sup>Optional</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#key_vault_id DatabricksWorkspaceRootDbfsCustomerManagedKey#key_vault_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyConfig.property.timeouts"></a>

```csharp
public DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts">DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#timeouts DatabricksWorkspaceRootDbfsCustomerManagedKey#timeouts}

---

### DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts <a name="DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#create DatabricksWorkspaceRootDbfsCustomerManagedKey#create}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#delete DatabricksWorkspaceRootDbfsCustomerManagedKey#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#read DatabricksWorkspaceRootDbfsCustomerManagedKey#read}. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#update DatabricksWorkspaceRootDbfsCustomerManagedKey#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#create DatabricksWorkspaceRootDbfsCustomerManagedKey#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#delete DatabricksWorkspaceRootDbfsCustomerManagedKey#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#read DatabricksWorkspaceRootDbfsCustomerManagedKey#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.16.0/docs/resources/databricks_workspace_root_dbfs_customer_managed_key#update DatabricksWorkspaceRootDbfsCustomerManagedKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference <a name="DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databricksWorkspaceRootDbfsCustomerManagedKey.DatabricksWorkspaceRootDbfsCustomerManagedKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



