# `data_azurerm_function_app_host_keys`

Refer to the Terraform Registory for docs: [`data_azurerm_function_app_host_keys`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/function_app_host_keys).

# `dataAzurermFunctionAppHostKeys` Submodule <a name="`dataAzurermFunctionAppHostKeys` Submodule" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermFunctionAppHostKeys <a name="DataAzurermFunctionAppHostKeys" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/function_app_host_keys azurerm_function_app_host_keys}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermFunctionAppHostKeys(Construct Scope, string Id, DataAzurermFunctionAppHostKeysConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig">DataAzurermFunctionAppHostKeysConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig">DataAzurermFunctionAppHostKeysConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermFunctionAppHostKeysTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermFunctionAppHostKeys.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermFunctionAppHostKeys.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermFunctionAppHostKeys.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.blobsExtensionKey">BlobsExtensionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.defaultFunctionKey">DefaultFunctionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.durabletaskExtensionKey">DurabletaskExtensionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.eventGridExtensionConfigKey">EventGridExtensionConfigKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.signalrExtensionKey">SignalrExtensionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference">DataAzurermFunctionAppHostKeysTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.webpubsubExtensionKey">WebpubsubExtensionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BlobsExtensionKey`<sup>Required</sup> <a name="BlobsExtensionKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.blobsExtensionKey"></a>

```csharp
public string BlobsExtensionKey { get; }
```

- *Type:* string

---

##### `DefaultFunctionKey`<sup>Required</sup> <a name="DefaultFunctionKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.defaultFunctionKey"></a>

```csharp
public string DefaultFunctionKey { get; }
```

- *Type:* string

---

##### `DurabletaskExtensionKey`<sup>Required</sup> <a name="DurabletaskExtensionKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.durabletaskExtensionKey"></a>

```csharp
public string DurabletaskExtensionKey { get; }
```

- *Type:* string

---

##### `EventGridExtensionConfigKey`<sup>Required</sup> <a name="EventGridExtensionConfigKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.eventGridExtensionConfigKey"></a>

```csharp
public string EventGridExtensionConfigKey { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `SignalrExtensionKey`<sup>Required</sup> <a name="SignalrExtensionKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.signalrExtensionKey"></a>

```csharp
public string SignalrExtensionKey { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeouts"></a>

```csharp
public DataAzurermFunctionAppHostKeysTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference">DataAzurermFunctionAppHostKeysTimeoutsOutputReference</a>

---

##### `WebpubsubExtensionKey`<sup>Required</sup> <a name="WebpubsubExtensionKey" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.webpubsubExtensionKey"></a>

```csharp
public string WebpubsubExtensionKey { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeys.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermFunctionAppHostKeysConfig <a name="DataAzurermFunctionAppHostKeysConfig" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermFunctionAppHostKeysConfig {
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
    DataAzurermFunctionAppHostKeysTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/function_app_host_keys#name DataAzurermFunctionAppHostKeys#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/function_app_host_keys#resource_group_name DataAzurermFunctionAppHostKeys#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/function_app_host_keys#id DataAzurermFunctionAppHostKeys#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/function_app_host_keys#name DataAzurermFunctionAppHostKeys#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/function_app_host_keys#resource_group_name DataAzurermFunctionAppHostKeys#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/function_app_host_keys#id DataAzurermFunctionAppHostKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysConfig.property.timeouts"></a>

```csharp
public DataAzurermFunctionAppHostKeysTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts">DataAzurermFunctionAppHostKeysTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/function_app_host_keys#timeouts DataAzurermFunctionAppHostKeys#timeouts}

---

### DataAzurermFunctionAppHostKeysTimeouts <a name="DataAzurermFunctionAppHostKeysTimeouts" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermFunctionAppHostKeysTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/function_app_host_keys#read DataAzurermFunctionAppHostKeys#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/data-sources/function_app_host_keys#read DataAzurermFunctionAppHostKeys#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermFunctionAppHostKeysTimeoutsOutputReference <a name="DataAzurermFunctionAppHostKeysTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermFunctionAppHostKeysTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermFunctionAppHostKeys.DataAzurermFunctionAppHostKeysTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



