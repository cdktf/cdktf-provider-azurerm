# `keyVaultManagedStorageAccountSasTokenDefinition` Submodule <a name="`keyVaultManagedStorageAccountSasTokenDefinition` Submodule" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KeyVaultManagedStorageAccountSasTokenDefinition <a name="KeyVaultManagedStorageAccountSasTokenDefinition" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition azurerm_key_vault_managed_storage_account_sas_token_definition}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultManagedStorageAccountSasTokenDefinition(Construct Scope, string Id, KeyVaultManagedStorageAccountSasTokenDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig">KeyVaultManagedStorageAccountSasTokenDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig">KeyVaultManagedStorageAccountSasTokenDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts"></a>

```csharp
private void PutTimeouts(KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KeyVaultManagedStorageAccountSasTokenDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultManagedStorageAccountSasTokenDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultManagedStorageAccountSasTokenDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultManagedStorageAccountSasTokenDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

KeyVaultManagedStorageAccountSasTokenDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a KeyVaultManagedStorageAccountSasTokenDefinition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KeyVaultManagedStorageAccountSasTokenDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KeyVaultManagedStorageAccountSasTokenDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the KeyVaultManagedStorageAccountSasTokenDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference">KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountIdInput">ManagedStorageAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUriInput">SasTemplateUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTypeInput">SasTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriodInput">ValidityPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountId">ManagedStorageAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUri">SasTemplateUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasType">SasType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriod">ValidityPeriod</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeouts"></a>

```csharp
public KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference">KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedStorageAccountIdInput`<sup>Optional</sup> <a name="ManagedStorageAccountIdInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountIdInput"></a>

```csharp
public string ManagedStorageAccountIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SasTemplateUriInput`<sup>Optional</sup> <a name="SasTemplateUriInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUriInput"></a>

```csharp
public string SasTemplateUriInput { get; }
```

- *Type:* string

---

##### `SasTypeInput`<sup>Optional</sup> <a name="SasTypeInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTypeInput"></a>

```csharp
public string SasTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ValidityPeriodInput`<sup>Optional</sup> <a name="ValidityPeriodInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriodInput"></a>

```csharp
public string ValidityPeriodInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedStorageAccountId`<sup>Required</sup> <a name="ManagedStorageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.managedStorageAccountId"></a>

```csharp
public string ManagedStorageAccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SasTemplateUri`<sup>Required</sup> <a name="SasTemplateUri" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasTemplateUri"></a>

```csharp
public string SasTemplateUri { get; }
```

- *Type:* string

---

##### `SasType`<sup>Required</sup> <a name="SasType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.sasType"></a>

```csharp
public string SasType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ValidityPeriod`<sup>Required</sup> <a name="ValidityPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.validityPeriod"></a>

```csharp
public string ValidityPeriod { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KeyVaultManagedStorageAccountSasTokenDefinitionConfig <a name="KeyVaultManagedStorageAccountSasTokenDefinitionConfig" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultManagedStorageAccountSasTokenDefinitionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedStorageAccountId,
    string Name,
    string SasTemplateUri,
    string SasType,
    string ValidityPeriod,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.managedStorageAccountId">ManagedStorageAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#managed_storage_account_id KeyVaultManagedStorageAccountSasTokenDefinition#managed_storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#name KeyVaultManagedStorageAccountSasTokenDefinition#name}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasTemplateUri">SasTemplateUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_template_uri KeyVaultManagedStorageAccountSasTokenDefinition#sas_template_uri}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasType">SasType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_type KeyVaultManagedStorageAccountSasTokenDefinition#sas_type}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.validityPeriod">ValidityPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#validity_period KeyVaultManagedStorageAccountSasTokenDefinition#validity_period}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#id KeyVaultManagedStorageAccountSasTokenDefinition#id}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#tags KeyVaultManagedStorageAccountSasTokenDefinition#tags}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedStorageAccountId`<sup>Required</sup> <a name="ManagedStorageAccountId" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.managedStorageAccountId"></a>

```csharp
public string ManagedStorageAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#managed_storage_account_id KeyVaultManagedStorageAccountSasTokenDefinition#managed_storage_account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#name KeyVaultManagedStorageAccountSasTokenDefinition#name}.

---

##### `SasTemplateUri`<sup>Required</sup> <a name="SasTemplateUri" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasTemplateUri"></a>

```csharp
public string SasTemplateUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_template_uri KeyVaultManagedStorageAccountSasTokenDefinition#sas_template_uri}.

---

##### `SasType`<sup>Required</sup> <a name="SasType" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.sasType"></a>

```csharp
public string SasType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#sas_type KeyVaultManagedStorageAccountSasTokenDefinition#sas_type}.

---

##### `ValidityPeriod`<sup>Required</sup> <a name="ValidityPeriod" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.validityPeriod"></a>

```csharp
public string ValidityPeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#validity_period KeyVaultManagedStorageAccountSasTokenDefinition#validity_period}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#id KeyVaultManagedStorageAccountSasTokenDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#tags KeyVaultManagedStorageAccountSasTokenDefinition#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionConfig.property.timeouts"></a>

```csharp
public KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts">KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#timeouts KeyVaultManagedStorageAccountSasTokenDefinition#timeouts}

---

### KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts <a name="KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#create KeyVaultManagedStorageAccountSasTokenDefinition#create}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#delete KeyVaultManagedStorageAccountSasTokenDefinition#delete}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#read KeyVaultManagedStorageAccountSasTokenDefinition#read}. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#update KeyVaultManagedStorageAccountSasTokenDefinition#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#create KeyVaultManagedStorageAccountSasTokenDefinition#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#delete KeyVaultManagedStorageAccountSasTokenDefinition#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#read KeyVaultManagedStorageAccountSasTokenDefinition#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.39.0/docs/resources/key_vault_managed_storage_account_sas_token_definition#update KeyVaultManagedStorageAccountSasTokenDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference <a name="KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.keyVaultManagedStorageAccountSasTokenDefinition.KeyVaultManagedStorageAccountSasTokenDefinitionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



