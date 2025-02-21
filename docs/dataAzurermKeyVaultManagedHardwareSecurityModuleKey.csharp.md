# `dataAzurermKeyVaultManagedHardwareSecurityModuleKey` Submodule <a name="`dataAzurermKeyVaultManagedHardwareSecurityModuleKey` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModuleKey <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/key_vault_managed_hardware_security_module_key azurerm_key_vault_managed_hardware_security_module_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultManagedHardwareSecurityModuleKey(Construct Scope, string Id, DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKeyVaultManagedHardwareSecurityModuleKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultManagedHardwareSecurityModuleKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultManagedHardwareSecurityModuleKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultManagedHardwareSecurityModuleKey.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultManagedHardwareSecurityModuleKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermKeyVaultManagedHardwareSecurityModuleKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermKeyVaultManagedHardwareSecurityModuleKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermKeyVaultManagedHardwareSecurityModuleKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/key_vault_managed_hardware_security_module_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultManagedHardwareSecurityModuleKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.curve">Curve</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keyOpts">KeyOpts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keySize">KeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDate">NotBeforeDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.versionedId">VersionedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.managedHsmIdInput">ManagedHsmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.managedHsmId">ManagedHsmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Curve`<sup>Required</sup> <a name="Curve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.curve"></a>

```csharp
public string Curve { get; }
```

- *Type:* string

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; }
```

- *Type:* string

---

##### `KeyOpts`<sup>Required</sup> <a name="KeyOpts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keyOpts"></a>

```csharp
public string[] KeyOpts { get; }
```

- *Type:* string[]

---

##### `KeySize`<sup>Required</sup> <a name="KeySize" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keySize"></a>

```csharp
public double KeySize { get; }
```

- *Type:* double

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `NotBeforeDate`<sup>Required</sup> <a name="NotBeforeDate" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.notBeforeDate"></a>

```csharp
public string NotBeforeDate { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.timeouts"></a>

```csharp
public DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VersionedId`<sup>Required</sup> <a name="VersionedId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.versionedId"></a>

```csharp
public string VersionedId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedHsmIdInput`<sup>Optional</sup> <a name="ManagedHsmIdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.managedHsmIdInput"></a>

```csharp
public string ManagedHsmIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedHsmId`<sup>Required</sup> <a name="ManagedHsmId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.managedHsmId"></a>

```csharp
public string ManagedHsmId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedHsmId,
    string Name,
    string Id = null,
    DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.managedHsmId">ManagedHsmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/key_vault_managed_hardware_security_module_key#managed_hsm_id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#managed_hsm_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/key_vault_managed_hardware_security_module_key#name DataAzurermKeyVaultManagedHardwareSecurityModuleKey#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/key_vault_managed_hardware_security_module_key#id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedHsmId`<sup>Required</sup> <a name="ManagedHsmId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.managedHsmId"></a>

```csharp
public string ManagedHsmId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/key_vault_managed_hardware_security_module_key#managed_hsm_id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#managed_hsm_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/key_vault_managed_hardware_security_module_key#name DataAzurermKeyVaultManagedHardwareSecurityModuleKey#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/key_vault_managed_hardware_security_module_key#id DataAzurermKeyVaultManagedHardwareSecurityModuleKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyConfig.property.timeouts"></a>

```csharp
public DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts">DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/key_vault_managed_hardware_security_module_key#timeouts DataAzurermKeyVaultManagedHardwareSecurityModuleKey#timeouts}

---

### DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/key_vault_managed_hardware_security_module_key#read DataAzurermKeyVaultManagedHardwareSecurityModuleKey#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.20.0/docs/data-sources/key_vault_managed_hardware_security_module_key#read DataAzurermKeyVaultManagedHardwareSecurityModuleKey#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference <a name="DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultManagedHardwareSecurityModuleKey.DataAzurermKeyVaultManagedHardwareSecurityModuleKeyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



