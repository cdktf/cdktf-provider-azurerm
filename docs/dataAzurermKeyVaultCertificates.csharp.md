# `dataAzurermKeyVaultCertificates` Submodule <a name="`dataAzurermKeyVaultCertificates` Submodule" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKeyVaultCertificates <a name="DataAzurermKeyVaultCertificates" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/key_vault_certificates azurerm_key_vault_certificates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultCertificates(Construct Scope, string Id, DataAzurermKeyVaultCertificatesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig">DataAzurermKeyVaultCertificatesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig">DataAzurermKeyVaultCertificatesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetIncludePending">ResetIncludePending</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermKeyVaultCertificatesTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIncludePending` <a name="ResetIncludePending" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetIncludePending"></a>

```csharp
private void ResetIncludePending()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermKeyVaultCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultCertificates.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultCertificates.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultCertificates.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermKeyVaultCertificates.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermKeyVaultCertificates resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermKeyVaultCertificates to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermKeyVaultCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/key_vault_certificates#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermKeyVaultCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.certificates">Certificates</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList">DataAzurermKeyVaultCertificatesCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.names">Names</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference">DataAzurermKeyVaultCertificatesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePendingInput">IncludePendingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultIdInput">KeyVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePending">IncludePending</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.certificates"></a>

```csharp
public DataAzurermKeyVaultCertificatesCertificatesList Certificates { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList">DataAzurermKeyVaultCertificatesCertificatesList</a>

---

##### `Names`<sup>Required</sup> <a name="Names" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.names"></a>

```csharp
public string[] Names { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeouts"></a>

```csharp
public DataAzurermKeyVaultCertificatesTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference">DataAzurermKeyVaultCertificatesTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludePendingInput`<sup>Optional</sup> <a name="IncludePendingInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePendingInput"></a>

```csharp
public object IncludePendingInput { get; }
```

- *Type:* object

---

##### `KeyVaultIdInput`<sup>Optional</sup> <a name="KeyVaultIdInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultIdInput"></a>

```csharp
public string KeyVaultIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IncludePending`<sup>Required</sup> <a name="IncludePending" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.includePending"></a>

```csharp
public object IncludePending { get; }
```

- *Type:* object

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificates.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKeyVaultCertificatesCertificates <a name="DataAzurermKeyVaultCertificatesCertificates" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultCertificatesCertificates {

};
```


### DataAzurermKeyVaultCertificatesConfig <a name="DataAzurermKeyVaultCertificatesConfig" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultCertificatesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KeyVaultId,
    string Id = null,
    object IncludePending = null,
    DataAzurermKeyVaultCertificatesTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.keyVaultId">KeyVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/key_vault_certificates#key_vault_id DataAzurermKeyVaultCertificates#key_vault_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/key_vault_certificates#id DataAzurermKeyVaultCertificates#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.includePending">IncludePending</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/key_vault_certificates#include_pending DataAzurermKeyVaultCertificates#include_pending}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KeyVaultId`<sup>Required</sup> <a name="KeyVaultId" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.keyVaultId"></a>

```csharp
public string KeyVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/key_vault_certificates#key_vault_id DataAzurermKeyVaultCertificates#key_vault_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/key_vault_certificates#id DataAzurermKeyVaultCertificates#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludePending`<sup>Optional</sup> <a name="IncludePending" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.includePending"></a>

```csharp
public object IncludePending { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/key_vault_certificates#include_pending DataAzurermKeyVaultCertificates#include_pending}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesConfig.property.timeouts"></a>

```csharp
public DataAzurermKeyVaultCertificatesTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts">DataAzurermKeyVaultCertificatesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/key_vault_certificates#timeouts DataAzurermKeyVaultCertificates#timeouts}

---

### DataAzurermKeyVaultCertificatesTimeouts <a name="DataAzurermKeyVaultCertificatesTimeouts" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultCertificatesTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/key_vault_certificates#read DataAzurermKeyVaultCertificates#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.93.0/docs/data-sources/key_vault_certificates#read DataAzurermKeyVaultCertificates#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKeyVaultCertificatesCertificatesList <a name="DataAzurermKeyVaultCertificatesCertificatesList" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultCertificatesCertificatesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.get"></a>

```csharp
private DataAzurermKeyVaultCertificatesCertificatesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermKeyVaultCertificatesCertificatesOutputReference <a name="DataAzurermKeyVaultCertificatesCertificatesOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultCertificatesCertificatesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates">DataAzurermKeyVaultCertificatesCertificates</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificatesOutputReference.property.internalValue"></a>

```csharp
public DataAzurermKeyVaultCertificatesCertificates InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesCertificates">DataAzurermKeyVaultCertificatesCertificates</a>

---


### DataAzurermKeyVaultCertificatesTimeoutsOutputReference <a name="DataAzurermKeyVaultCertificatesTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermKeyVaultCertificatesTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKeyVaultCertificates.DataAzurermKeyVaultCertificatesTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



