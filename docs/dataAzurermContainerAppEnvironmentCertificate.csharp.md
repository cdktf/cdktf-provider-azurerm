# `dataAzurermContainerAppEnvironmentCertificate` Submodule <a name="`dataAzurermContainerAppEnvironmentCertificate` Submodule" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermContainerAppEnvironmentCertificate <a name="DataAzurermContainerAppEnvironmentCertificate" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/container_app_environment_certificate azurerm_container_app_environment_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermContainerAppEnvironmentCertificate(Construct Scope, string Id, DataAzurermContainerAppEnvironmentCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig">DataAzurermContainerAppEnvironmentCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig">DataAzurermContainerAppEnvironmentCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermContainerAppEnvironmentCertificateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermContainerAppEnvironmentCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermContainerAppEnvironmentCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermContainerAppEnvironmentCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermContainerAppEnvironmentCertificate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermContainerAppEnvironmentCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermContainerAppEnvironmentCertificate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermContainerAppEnvironmentCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermContainerAppEnvironmentCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/container_app_environment_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermContainerAppEnvironmentCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.expirationDate">ExpirationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issueDate">IssueDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.subjectName">SubjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference">DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentIdInput">ContainerAppEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExpirationDate`<sup>Required</sup> <a name="ExpirationDate" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.expirationDate"></a>

```csharp
public string ExpirationDate { get; }
```

- *Type:* string

---

##### `IssueDate`<sup>Required</sup> <a name="IssueDate" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issueDate"></a>

```csharp
public string IssueDate { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `SubjectName`<sup>Required</sup> <a name="SubjectName" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.subjectName"></a>

```csharp
public string SubjectName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeouts"></a>

```csharp
public DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference">DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference</a>

---

##### `ContainerAppEnvironmentIdInput`<sup>Optional</sup> <a name="ContainerAppEnvironmentIdInput" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentIdInput"></a>

```csharp
public string ContainerAppEnvironmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.containerAppEnvironmentId"></a>

```csharp
public string ContainerAppEnvironmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermContainerAppEnvironmentCertificateConfig <a name="DataAzurermContainerAppEnvironmentCertificateConfig" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermContainerAppEnvironmentCertificateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ContainerAppEnvironmentId,
    string Name,
    string Id = null,
    DataAzurermContainerAppEnvironmentCertificateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.containerAppEnvironmentId">ContainerAppEnvironmentId</a></code> | <code>string</code> | The Container App Managed Environment ID to configure this Certificate on. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.name">Name</a></code> | <code>string</code> | The name of the Container Apps Certificate. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/container_app_environment_certificate#id DataAzurermContainerAppEnvironmentCertificate#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ContainerAppEnvironmentId`<sup>Required</sup> <a name="ContainerAppEnvironmentId" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.containerAppEnvironmentId"></a>

```csharp
public string ContainerAppEnvironmentId { get; set; }
```

- *Type:* string

The Container App Managed Environment ID to configure this Certificate on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/container_app_environment_certificate#container_app_environment_id DataAzurermContainerAppEnvironmentCertificate#container_app_environment_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Container Apps Certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/container_app_environment_certificate#name DataAzurermContainerAppEnvironmentCertificate#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/container_app_environment_certificate#id DataAzurermContainerAppEnvironmentCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateConfig.property.timeouts"></a>

```csharp
public DataAzurermContainerAppEnvironmentCertificateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts">DataAzurermContainerAppEnvironmentCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/container_app_environment_certificate#timeouts DataAzurermContainerAppEnvironmentCertificate#timeouts}

---

### DataAzurermContainerAppEnvironmentCertificateTimeouts <a name="DataAzurermContainerAppEnvironmentCertificateTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermContainerAppEnvironmentCertificateTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/container_app_environment_certificate#read DataAzurermContainerAppEnvironmentCertificate#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.26.0/docs/data-sources/container_app_environment_certificate#read DataAzurermContainerAppEnvironmentCertificate#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference <a name="DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermContainerAppEnvironmentCertificate.DataAzurermContainerAppEnvironmentCertificateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



