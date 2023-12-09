# `dataAzurermSignalrService` Submodule <a name="`dataAzurermSignalrService` Submodule" id="@cdktf/provider-azurerm.dataAzurermSignalrService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSignalrService <a name="DataAzurermSignalrService" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/signalr_service azurerm_signalr_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSignalrService(Construct Scope, string Id, DataAzurermSignalrServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig">DataAzurermSignalrServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig">DataAzurermSignalrServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermSignalrServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts">DataAzurermSignalrServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermSignalrService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSignalrService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSignalrService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSignalrService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSignalrService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermSignalrService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermSignalrService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermSignalrService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/signalr_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSignalrService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.aadAuthEnabled">AadAuthEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.primaryAccessKey">PrimaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.primaryConnectionString">PrimaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.publicPort">PublicPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.secondaryAccessKey">SecondaryAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.secondaryConnectionString">SecondaryConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.serverlessConnectionTimeoutInSeconds">ServerlessConnectionTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.serverPort">ServerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference">DataAzurermSignalrServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tlsClientCertEnabled">TlsClientCertEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AadAuthEnabled`<sup>Required</sup> <a name="AadAuthEnabled" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.aadAuthEnabled"></a>

```csharp
public IResolvable AadAuthEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.localAuthEnabled"></a>

```csharp
public IResolvable LocalAuthEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PrimaryAccessKey`<sup>Required</sup> <a name="PrimaryAccessKey" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.primaryAccessKey"></a>

```csharp
public string PrimaryAccessKey { get; }
```

- *Type:* string

---

##### `PrimaryConnectionString`<sup>Required</sup> <a name="PrimaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.primaryConnectionString"></a>

```csharp
public string PrimaryConnectionString { get; }
```

- *Type:* string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.publicNetworkAccessEnabled"></a>

```csharp
public IResolvable PublicNetworkAccessEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `PublicPort`<sup>Required</sup> <a name="PublicPort" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.publicPort"></a>

```csharp
public double PublicPort { get; }
```

- *Type:* double

---

##### `SecondaryAccessKey`<sup>Required</sup> <a name="SecondaryAccessKey" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.secondaryAccessKey"></a>

```csharp
public string SecondaryAccessKey { get; }
```

- *Type:* string

---

##### `SecondaryConnectionString`<sup>Required</sup> <a name="SecondaryConnectionString" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.secondaryConnectionString"></a>

```csharp
public string SecondaryConnectionString { get; }
```

- *Type:* string

---

##### `ServerlessConnectionTimeoutInSeconds`<sup>Required</sup> <a name="ServerlessConnectionTimeoutInSeconds" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.serverlessConnectionTimeoutInSeconds"></a>

```csharp
public double ServerlessConnectionTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.serverPort"></a>

```csharp
public double ServerPort { get; }
```

- *Type:* double

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.timeouts"></a>

```csharp
public DataAzurermSignalrServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference">DataAzurermSignalrServiceTimeoutsOutputReference</a>

---

##### `TlsClientCertEnabled`<sup>Required</sup> <a name="TlsClientCertEnabled" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tlsClientCertEnabled"></a>

```csharp
public IResolvable TlsClientCertEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSignalrServiceConfig <a name="DataAzurermSignalrServiceConfig" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSignalrServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ResourceGroupName,
    string Id = null,
    DataAzurermSignalrServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/signalr_service#name DataAzurermSignalrService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/signalr_service#resource_group_name DataAzurermSignalrService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/signalr_service#id DataAzurermSignalrService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts">DataAzurermSignalrServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/signalr_service#name DataAzurermSignalrService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/signalr_service#resource_group_name DataAzurermSignalrService#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/signalr_service#id DataAzurermSignalrService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceConfig.property.timeouts"></a>

```csharp
public DataAzurermSignalrServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts">DataAzurermSignalrServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/signalr_service#timeouts DataAzurermSignalrService#timeouts}

---

### DataAzurermSignalrServiceTimeouts <a name="DataAzurermSignalrServiceTimeouts" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSignalrServiceTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/signalr_service#read DataAzurermSignalrService#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.84.0/docs/data-sources/signalr_service#read DataAzurermSignalrService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSignalrServiceTimeoutsOutputReference <a name="DataAzurermSignalrServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSignalrServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSignalrService.DataAzurermSignalrServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



