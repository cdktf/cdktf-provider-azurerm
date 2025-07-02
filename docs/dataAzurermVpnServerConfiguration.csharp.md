# `dataAzurermVpnServerConfiguration` Submodule <a name="`dataAzurermVpnServerConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVpnServerConfiguration <a name="DataAzurermVpnServerConfiguration" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/vpn_server_configuration azurerm_vpn_server_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfiguration(Construct Scope, string Id, DataAzurermVpnServerConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig">DataAzurermVpnServerConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig">DataAzurermVpnServerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts"></a>

```csharp
private void PutTimeouts(DataAzurermVpnServerConfigurationTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermVpnServerConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermVpnServerConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermVpnServerConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermVpnServerConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

DataAzurermVpnServerConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataAzurermVpnServerConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermVpnServerConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermVpnServerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/vpn_server_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVpnServerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.azureActiveDirectoryAuthentication">AzureActiveDirectoryAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRevokedCertificate">ClientRevokedCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList">DataAzurermVpnServerConfigurationClientRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRootCertificate">ClientRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList">DataAzurermVpnServerConfigurationClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList">DataAzurermVpnServerConfigurationIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.radius">Radius</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList">DataAzurermVpnServerConfigurationRadiusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference">DataAzurermVpnServerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnAuthenticationTypes">VpnAuthenticationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnProtocols">VpnProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AzureActiveDirectoryAuthentication`<sup>Required</sup> <a name="AzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.azureActiveDirectoryAuthentication"></a>

```csharp
public DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList AzureActiveDirectoryAuthentication { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList</a>

---

##### `ClientRevokedCertificate`<sup>Required</sup> <a name="ClientRevokedCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRevokedCertificate"></a>

```csharp
public DataAzurermVpnServerConfigurationClientRevokedCertificateList ClientRevokedCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList">DataAzurermVpnServerConfigurationClientRevokedCertificateList</a>

---

##### `ClientRootCertificate`<sup>Required</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRootCertificate"></a>

```csharp
public DataAzurermVpnServerConfigurationClientRootCertificateList ClientRootCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList">DataAzurermVpnServerConfigurationClientRootCertificateList</a>

---

##### `IpsecPolicy`<sup>Required</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.ipsecPolicy"></a>

```csharp
public DataAzurermVpnServerConfigurationIpsecPolicyList IpsecPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList">DataAzurermVpnServerConfigurationIpsecPolicyList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Radius`<sup>Required</sup> <a name="Radius" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.radius"></a>

```csharp
public DataAzurermVpnServerConfigurationRadiusList Radius { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList">DataAzurermVpnServerConfigurationRadiusList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeouts"></a>

```csharp
public DataAzurermVpnServerConfigurationTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference">DataAzurermVpnServerConfigurationTimeoutsOutputReference</a>

---

##### `VpnAuthenticationTypes`<sup>Required</sup> <a name="VpnAuthenticationTypes" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnAuthenticationTypes"></a>

```csharp
public string[] VpnAuthenticationTypes { get; }
```

- *Type:* string[]

---

##### `VpnProtocols`<sup>Required</sup> <a name="VpnProtocols" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnProtocols"></a>

```csharp
public string[] VpnProtocols { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupNameInput"></a>

```csharp
public string ResourceGroupNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication {

};
```


### DataAzurermVpnServerConfigurationClientRevokedCertificate <a name="DataAzurermVpnServerConfigurationClientRevokedCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationClientRevokedCertificate {

};
```


### DataAzurermVpnServerConfigurationClientRootCertificate <a name="DataAzurermVpnServerConfigurationClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationClientRootCertificate {

};
```


### DataAzurermVpnServerConfigurationConfig <a name="DataAzurermVpnServerConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationConfig {
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
    DataAzurermVpnServerConfigurationTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.resourceGroupName"></a>

```csharp
public string ResourceGroupName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.timeouts"></a>

```csharp
public DataAzurermVpnServerConfigurationTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/vpn_server_configuration#timeouts DataAzurermVpnServerConfiguration#timeouts}

---

### DataAzurermVpnServerConfigurationIpsecPolicy <a name="DataAzurermVpnServerConfigurationIpsecPolicy" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationIpsecPolicy {

};
```


### DataAzurermVpnServerConfigurationRadius <a name="DataAzurermVpnServerConfigurationRadius" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadius {

};
```


### DataAzurermVpnServerConfigurationRadiusClientRootCertificate <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadiusClientRootCertificate {

};
```


### DataAzurermVpnServerConfigurationRadiusServer <a name="DataAzurermVpnServerConfigurationRadiusServer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadiusServer {

};
```


### DataAzurermVpnServerConfigurationRadiusServerRootCertificate <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadiusServerRootCertificate {

};
```


### DataAzurermVpnServerConfigurationTimeouts <a name="DataAzurermVpnServerConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationTimeouts {
    string Read = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/vpn_server_configuration#read DataAzurermVpnServerConfiguration#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.35.0/docs/data-sources/vpn_server_configuration#read DataAzurermVpnServerConfiguration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get"></a>

```csharp
private DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant">Tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant"></a>

```csharp
public string Tenant { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue"></a>

```csharp
public DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication</a>

---


### DataAzurermVpnServerConfigurationClientRevokedCertificateList <a name="DataAzurermVpnServerConfigurationClientRevokedCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationClientRevokedCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get"></a>

```csharp
private DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference <a name="DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate">DataAzurermVpnServerConfigurationClientRevokedCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue"></a>

```csharp
public DataAzurermVpnServerConfigurationClientRevokedCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate">DataAzurermVpnServerConfigurationClientRevokedCertificate</a>

---


### DataAzurermVpnServerConfigurationClientRootCertificateList <a name="DataAzurermVpnServerConfigurationClientRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationClientRootCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get"></a>

```csharp
private DataAzurermVpnServerConfigurationClientRootCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermVpnServerConfigurationClientRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationClientRootCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData">PublicCertData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate">DataAzurermVpnServerConfigurationClientRootCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData"></a>

```csharp
public string PublicCertData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.internalValue"></a>

```csharp
public DataAzurermVpnServerConfigurationClientRootCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate">DataAzurermVpnServerConfigurationClientRootCertificate</a>

---


### DataAzurermVpnServerConfigurationIpsecPolicyList <a name="DataAzurermVpnServerConfigurationIpsecPolicyList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationIpsecPolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get"></a>

```csharp
private DataAzurermVpnServerConfigurationIpsecPolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermVpnServerConfigurationIpsecPolicyOutputReference <a name="DataAzurermVpnServerConfigurationIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationIpsecPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup">DhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption">IkeEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity">IkeIntegrity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption">IpsecEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup">PfsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes">SaDataSizeKilobytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds">SaLifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy">DataAzurermVpnServerConfigurationIpsecPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup"></a>

```csharp
public string DhGroup { get; }
```

- *Type:* string

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption"></a>

```csharp
public string IkeEncryption { get; }
```

- *Type:* string

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```csharp
public string IkeIntegrity { get; }
```

- *Type:* string

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```csharp
public string IpsecEncryption { get; }
```

- *Type:* string

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```csharp
public string IpsecIntegrity { get; }
```

- *Type:* string

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup"></a>

```csharp
public string PfsGroup { get; }
```

- *Type:* string

---

##### `SaDataSizeKilobytes`<sup>Required</sup> <a name="SaDataSizeKilobytes" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes"></a>

```csharp
public double SaDataSizeKilobytes { get; }
```

- *Type:* double

---

##### `SaLifetimeSeconds`<sup>Required</sup> <a name="SaLifetimeSeconds" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds"></a>

```csharp
public double SaLifetimeSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.internalValue"></a>

```csharp
public DataAzurermVpnServerConfigurationIpsecPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy">DataAzurermVpnServerConfigurationIpsecPolicy</a>

---


### DataAzurermVpnServerConfigurationRadiusClientRootCertificateList <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadiusClientRootCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get"></a>

```csharp
private DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate">DataAzurermVpnServerConfigurationRadiusClientRootCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue"></a>

```csharp
public DataAzurermVpnServerConfigurationRadiusClientRootCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate">DataAzurermVpnServerConfigurationRadiusClientRootCertificate</a>

---


### DataAzurermVpnServerConfigurationRadiusList <a name="DataAzurermVpnServerConfigurationRadiusList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadiusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get"></a>

```csharp
private DataAzurermVpnServerConfigurationRadiusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermVpnServerConfigurationRadiusOutputReference <a name="DataAzurermVpnServerConfigurationRadiusOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadiusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.clientRootCertificate">ClientRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList">DataAzurermVpnServerConfigurationRadiusClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.server">Server</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList">DataAzurermVpnServerConfigurationRadiusServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.serverRootCertificate">ServerRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList">DataAzurermVpnServerConfigurationRadiusServerRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius">DataAzurermVpnServerConfigurationRadius</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientRootCertificate`<sup>Required</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.clientRootCertificate"></a>

```csharp
public DataAzurermVpnServerConfigurationRadiusClientRootCertificateList ClientRootCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList">DataAzurermVpnServerConfigurationRadiusClientRootCertificateList</a>

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.server"></a>

```csharp
public DataAzurermVpnServerConfigurationRadiusServerList Server { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList">DataAzurermVpnServerConfigurationRadiusServerList</a>

---

##### `ServerRootCertificate`<sup>Required</sup> <a name="ServerRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.serverRootCertificate"></a>

```csharp
public DataAzurermVpnServerConfigurationRadiusServerRootCertificateList ServerRootCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList">DataAzurermVpnServerConfigurationRadiusServerRootCertificateList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.internalValue"></a>

```csharp
public DataAzurermVpnServerConfigurationRadius InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius">DataAzurermVpnServerConfigurationRadius</a>

---


### DataAzurermVpnServerConfigurationRadiusServerList <a name="DataAzurermVpnServerConfigurationRadiusServerList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadiusServerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get"></a>

```csharp
private DataAzurermVpnServerConfigurationRadiusServerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermVpnServerConfigurationRadiusServerOutputReference <a name="DataAzurermVpnServerConfigurationRadiusServerOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadiusServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.score">Score</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer">DataAzurermVpnServerConfigurationRadiusServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.score"></a>

```csharp
public double Score { get; }
```

- *Type:* double

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.internalValue"></a>

```csharp
public DataAzurermVpnServerConfigurationRadiusServer InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer">DataAzurermVpnServerConfigurationRadiusServer</a>

---


### DataAzurermVpnServerConfigurationRadiusServerRootCertificateList <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadiusServerRootCertificateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get"></a>

```csharp
private DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData">PublicCertData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate">DataAzurermVpnServerConfigurationRadiusServerRootCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData"></a>

```csharp
public string PublicCertData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue"></a>

```csharp
public DataAzurermVpnServerConfigurationRadiusServerRootCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate">DataAzurermVpnServerConfigurationRadiusServerRootCertificate</a>

---


### DataAzurermVpnServerConfigurationTimeoutsOutputReference <a name="DataAzurermVpnServerConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Azurerm;

new DataAzurermVpnServerConfigurationTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



