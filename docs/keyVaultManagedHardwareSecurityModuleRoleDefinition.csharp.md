# `keyVaultManagedHardwareSecurityModuleRoleDefinition` Submodule <a name="`keyVaultManagedHardwareSecurityModuleRoleDefinition` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinition <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinition" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition azurerm_key_vault_managed_hardware_security_module_role_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultManagedHardwareSecurityModuleRoleDefinition(Construct Scope, string Id, KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig">KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig">KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission">PutPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetPermission">ResetPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPermission` <a name="PutPermission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission"></a>

```csharp
private void PutPermission(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putPermission.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts"></a>

```csharp
private void PutTimeouts(KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetPermission"></a>

```csharp
private void ResetPermission()
```

##### `ResetRoleName` <a name="ResetRoleName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetRoleName"></a>

```csharp
private void ResetRoleName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultManagedHardwareSecurityModuleRoleDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultManagedHardwareSecurityModuleRoleDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultManagedHardwareSecurityModuleRoleDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultManagedHardwareSecurityModuleRoleDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KeyVaultManagedHardwareSecurityModuleRoleDefinition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVaultManagedHardwareSecurityModuleRoleDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVaultManagedHardwareSecurityModuleRoleDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedHardwareSecurityModuleRoleDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permission">Permission</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.resourceManagerId">ResourceManagerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleType">RoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permissionInput">PermissionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleNameInput">RoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.vaultBaseUrlInput">VaultBaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.vaultBaseUrl">VaultBaseUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permission"></a>

```csharp
public KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList Permission { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList">KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList</a>

---

##### `ResourceManagerId`<sup>Required</sup> <a name="ResourceManagerId" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.resourceManagerId"></a>

```csharp
public string ResourceManagerId { get; }
```

- *Type:* string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleType"></a>

```csharp
public string RoleType { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeouts"></a>

```csharp
public KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.permissionInput"></a>

```csharp
public object PermissionInput { get; }
```

- *Type:* object

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleNameInput"></a>

```csharp
public string RoleNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VaultBaseUrlInput`<sup>Optional</sup> <a name="VaultBaseUrlInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.vaultBaseUrlInput"></a>

```csharp
public string VaultBaseUrlInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `VaultBaseUrl`<sup>Required</sup> <a name="VaultBaseUrl" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.vaultBaseUrl"></a>

```csharp
public string VaultBaseUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string VaultBaseUrl,
    string Description = null,
    string Id = null,
    object Permission = null,
    string RoleName = null,
    KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#name KeyVaultManagedHardwareSecurityModuleRoleDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.vaultBaseUrl">VaultBaseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#vault_base_url KeyVaultManagedHardwareSecurityModuleRoleDefinition#vault_base_url}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#description KeyVaultManagedHardwareSecurityModuleRoleDefinition#description}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#id KeyVaultManagedHardwareSecurityModuleRoleDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.permission">Permission</a></code> | <code>object</code> | permission block. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.roleName">RoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#role_name KeyVaultManagedHardwareSecurityModuleRoleDefinition#role_name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#name KeyVaultManagedHardwareSecurityModuleRoleDefinition#name}.

---

##### `VaultBaseUrl`<sup>Required</sup> <a name="VaultBaseUrl" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.vaultBaseUrl"></a>

```csharp
public string VaultBaseUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#vault_base_url KeyVaultManagedHardwareSecurityModuleRoleDefinition#vault_base_url}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#description KeyVaultManagedHardwareSecurityModuleRoleDefinition#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#id KeyVaultManagedHardwareSecurityModuleRoleDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.permission"></a>

```csharp
public object Permission { get; set; }
```

- *Type:* object

permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#permission KeyVaultManagedHardwareSecurityModuleRoleDefinition#permission}

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.roleName"></a>

```csharp
public string RoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#role_name KeyVaultManagedHardwareSecurityModuleRoleDefinition#role_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionConfig.property.timeouts"></a>

```csharp
public KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts">KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#timeouts KeyVaultManagedHardwareSecurityModuleRoleDefinition#timeouts}

---

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission {
    string[] Actions = null,
    string[] DataActions = null,
    string[] NotActions = null,
    string[] NotDataActions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.actions">Actions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.dataActions">DataActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#data_actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notActions">NotActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_actions}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notDataActions">NotDataActions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_data_actions}. |

---

##### `Actions`<sup>Optional</sup> <a name="Actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.actions"></a>

```csharp
public string[] Actions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#actions}.

---

##### `DataActions`<sup>Optional</sup> <a name="DataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.dataActions"></a>

```csharp
public string[] DataActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#data_actions}.

---

##### `NotActions`<sup>Optional</sup> <a name="NotActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notActions"></a>

```csharp
public string[] NotActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_actions}.

---

##### `NotDataActions`<sup>Optional</sup> <a name="NotDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermission.property.notDataActions"></a>

```csharp
public string[] NotDataActions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#not_data_actions KeyVaultManagedHardwareSecurityModuleRoleDefinition#not_data_actions}.

---

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#create KeyVaultManagedHardwareSecurityModuleRoleDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#delete KeyVaultManagedHardwareSecurityModuleRoleDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#read KeyVaultManagedHardwareSecurityModuleRoleDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#update KeyVaultManagedHardwareSecurityModuleRoleDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#create KeyVaultManagedHardwareSecurityModuleRoleDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#delete KeyVaultManagedHardwareSecurityModuleRoleDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#read KeyVaultManagedHardwareSecurityModuleRoleDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/resources/key_vault_managed_hardware_security_module_role_definition#update KeyVaultManagedHardwareSecurityModuleRoleDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get"></a>

```csharp
private KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetActions">ResetActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetDataActions">ResetDataActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotActions">ResetNotActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotDataActions">ResetNotDataActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActions` <a name="ResetActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetActions"></a>

```csharp
private void ResetActions()
```

##### `ResetDataActions` <a name="ResetDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetDataActions"></a>

```csharp
private void ResetDataActions()
```

##### `ResetNotActions` <a name="ResetNotActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotActions"></a>

```csharp
private void ResetNotActions()
```

##### `ResetNotDataActions` <a name="ResetNotDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.resetNotDataActions"></a>

```csharp
private void ResetNotDataActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actionsInput">ActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActionsInput">DataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActionsInput">NotActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActionsInput">NotDataActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actions">Actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActions">DataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActions">NotActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActions">NotDataActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actionsInput"></a>

```csharp
public string[] ActionsInput { get; }
```

- *Type:* string[]

---

##### `DataActionsInput`<sup>Optional</sup> <a name="DataActionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActionsInput"></a>

```csharp
public string[] DataActionsInput { get; }
```

- *Type:* string[]

---

##### `NotActionsInput`<sup>Optional</sup> <a name="NotActionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActionsInput"></a>

```csharp
public string[] NotActionsInput { get; }
```

- *Type:* string[]

---

##### `NotDataActionsInput`<sup>Optional</sup> <a name="NotDataActionsInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActionsInput"></a>

```csharp
public string[] NotDataActionsInput { get; }
```

- *Type:* string[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.actions"></a>

```csharp
public string[] Actions { get; }
```

- *Type:* string[]

---

##### `DataActions`<sup>Required</sup> <a name="DataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.dataActions"></a>

```csharp
public string[] DataActions { get; }
```

- *Type:* string[]

---

##### `NotActions`<sup>Required</sup> <a name="NotActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notActions"></a>

```csharp
public string[] NotActions { get; }
```

- *Type:* string[]

---

##### `NotDataActions`<sup>Required</sup> <a name="NotDataActions" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.notDataActions"></a>

```csharp
public string[] NotDataActions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionPermissionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference <a name="KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultManagedHardwareSecurityModuleRoleDefinition.KeyVaultManagedHardwareSecurityModuleRoleDefinitionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



