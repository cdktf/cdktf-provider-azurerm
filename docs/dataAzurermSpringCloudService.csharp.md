# `dataAzurermSpringCloudService` Submodule <a name="`dataAzurermSpringCloudService` Submodule" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSpringCloudService <a name="DataAzurermSpringCloudService" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/spring_cloud_service azurerm_spring_cloud_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudService(Construct Scope, string Id, DataAzurermSpringCloudServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig">DataAzurermSpringCloudServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig">DataAzurermSpringCloudServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermSpringCloudServiceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts">DataAzurermSpringCloudServiceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermSpringCloudService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSpringCloudService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSpringCloudService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSpringCloudService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermSpringCloudService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermSpringCloudService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermSpringCloudService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermSpringCloudService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/spring_cloud_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSpringCloudService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.configServerGitSetting">ConfigServerGitSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList">DataAzurermSpringCloudServiceConfigServerGitSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.outboundPublicIpAddresses">OutboundPublicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.requiredNetworkTrafficRules">RequiredNetworkTrafficRules</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList">DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference">DataAzurermSpringCloudServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ConfigServerGitSetting`<sup>Required</sup> <a name="ConfigServerGitSetting" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.configServerGitSetting"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSettingList ConfigServerGitSetting { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList">DataAzurermSpringCloudServiceConfigServerGitSettingList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `OutboundPublicIpAddresses`<sup>Required</sup> <a name="OutboundPublicIpAddresses" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.outboundPublicIpAddresses"></a>

```csharp
public string[] OutboundPublicIpAddresses { get; }
```

- *Type:* string[]

---

##### `RequiredNetworkTrafficRules`<sup>Required</sup> <a name="RequiredNetworkTrafficRules" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.requiredNetworkTrafficRules"></a>

```csharp
public DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList RequiredNetworkTrafficRules { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList">DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.timeouts"></a>

```csharp
public DataAzurermSpringCloudServiceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference">DataAzurermSpringCloudServiceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSpringCloudServiceConfig <a name="DataAzurermSpringCloudServiceConfig" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfig {
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
    DataAzurermSpringCloudServiceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/spring_cloud_service#name DataAzurermSpringCloudService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/spring_cloud_service#resource_group_name DataAzurermSpringCloudService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/spring_cloud_service#id DataAzurermSpringCloudService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts">DataAzurermSpringCloudServiceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/spring_cloud_service#name DataAzurermSpringCloudService#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/spring_cloud_service#resource_group_name DataAzurermSpringCloudService#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/spring_cloud_service#id DataAzurermSpringCloudService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.timeouts"></a>

```csharp
public DataAzurermSpringCloudServiceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts">DataAzurermSpringCloudServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/spring_cloud_service#timeouts DataAzurermSpringCloudService#timeouts}

---

### DataAzurermSpringCloudServiceConfigServerGitSetting <a name="DataAzurermSpringCloudServiceConfigServerGitSetting" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSetting {

};
```


### DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth <a name="DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth {

};
```


### DataAzurermSpringCloudServiceConfigServerGitSettingRepository <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepository" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepository.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingRepository {

};
```


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth {

};
```


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth {

};
```


### DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth <a name="DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth {

};
```


### DataAzurermSpringCloudServiceRequiredNetworkTrafficRules <a name="DataAzurermSpringCloudServiceRequiredNetworkTrafficRules" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceRequiredNetworkTrafficRules {

};
```


### DataAzurermSpringCloudServiceTimeouts <a name="DataAzurermSpringCloudServiceTimeouts" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/spring_cloud_service#read DataAzurermSpringCloudService#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.104.2/docs/data-sources/spring_cloud_service#read DataAzurermSpringCloudService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.get"></a>

```csharp
private DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth">DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth">DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

---


### DataAzurermSpringCloudServiceConfigServerGitSettingList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.get"></a>

```csharp
private DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuth">HttpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.repository">Repository</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.searchPaths">SearchPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuth">SshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSetting">DataAzurermSpringCloudServiceConfigServerGitSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpBasicAuth`<sup>Required</sup> <a name="HttpBasicAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuth"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList HttpBasicAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList</a>

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Repository`<sup>Required</sup> <a name="Repository" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.repository"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList Repository { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList</a>

---

##### `SearchPaths`<sup>Required</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.searchPaths"></a>

```csharp
public string[] SearchPaths { get; }
```

- *Type:* string[]

---

##### `SshAuth`<sup>Required</sup> <a name="SshAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuth"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList SshAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSetting InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSetting">DataAzurermSpringCloudServiceConfigServerGitSetting</a>

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.get"></a>

```csharp
private DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.get"></a>

```csharp
private DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuth">HttpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.pattern">Pattern</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPaths">SearchPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuth">SshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepository">DataAzurermSpringCloudServiceConfigServerGitSettingRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HttpBasicAuth`<sup>Required</sup> <a name="HttpBasicAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuth"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList HttpBasicAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList</a>

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.pattern"></a>

```csharp
public string[] Pattern { get; }
```

- *Type:* string[]

---

##### `SearchPaths`<sup>Required</sup> <a name="SearchPaths" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPaths"></a>

```csharp
public string[] SearchPaths { get; }
```

- *Type:* string[]

---

##### `SshAuth`<sup>Required</sup> <a name="SshAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuth"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList SshAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSettingRepository InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepository">DataAzurermSpringCloudServiceConfigServerGitSettingRepository</a>

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.get"></a>

```csharp
private DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKey">HostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabled">StrictHostKeyCheckingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth">DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostKey`<sup>Required</sup> <a name="HostKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKey"></a>

```csharp
public string HostKey { get; }
```

- *Type:* string

---

##### `HostKeyAlgorithm`<sup>Required</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithm"></a>

```csharp
public string HostKeyAlgorithm { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `StrictHostKeyCheckingEnabled`<sup>Required</sup> <a name="StrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabled"></a>

```csharp
public IResolvable StrictHostKeyCheckingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth">DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

---


### DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.get"></a>

```csharp
private DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKey">HostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithm">HostKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabled">StrictHostKeyCheckingEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth">DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostKey`<sup>Required</sup> <a name="HostKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKey"></a>

```csharp
public string HostKey { get; }
```

- *Type:* string

---

##### `HostKeyAlgorithm`<sup>Required</sup> <a name="HostKeyAlgorithm" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithm"></a>

```csharp
public string HostKeyAlgorithm { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `StrictHostKeyCheckingEnabled`<sup>Required</sup> <a name="StrictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabled"></a>

```csharp
public IResolvable StrictHostKeyCheckingEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth">DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth</a>

---


### DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList <a name="DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.get"></a>

```csharp
private DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference <a name="DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqdns">Fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRules">DataAzurermSpringCloudServiceRequiredNetworkTrafficRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Fqdns`<sup>Required</sup> <a name="Fqdns" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqdns"></a>

```csharp
public string[] Fqdns { get; }
```

- *Type:* string[]

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.internalValue"></a>

```csharp
public DataAzurermSpringCloudServiceRequiredNetworkTrafficRules InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRules">DataAzurermSpringCloudServiceRequiredNetworkTrafficRules</a>

---


### DataAzurermSpringCloudServiceTimeoutsOutputReference <a name="DataAzurermSpringCloudServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermSpringCloudServiceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



