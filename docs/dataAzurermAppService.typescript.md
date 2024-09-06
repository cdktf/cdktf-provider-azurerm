# `dataAzurermAppService` Submodule <a name="`dataAzurermAppService` Submodule" id="@cdktf/provider-azurerm.dataAzurermAppService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermAppService <a name="DataAzurermAppService" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/app_service azurerm_app_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppService(scope: Construct, id: string, config: DataAzurermAppServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig">DataAzurermAppServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig">DataAzurermAppServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermAppServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeouts">DataAzurermAppServiceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermAppService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.isConstruct"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

dataAzurermAppService.DataAzurermAppService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.isTerraformElement"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

dataAzurermAppService.DataAzurermAppService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.isTerraformDataSource"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

dataAzurermAppService.DataAzurermAppService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.generateConfigForImport"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

dataAzurermAppService.DataAzurermAppService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermAppService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermAppService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermAppService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/app_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermAppService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.appServicePlanId">appServicePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.appSettings">appSettings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.clientAffinityEnabled">clientAffinityEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.clientCertEnabled">clientCertEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.connectionString">connectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList">DataAzurermAppServiceConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.customDomainVerificationId">customDomainVerificationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.defaultSiteHostname">defaultSiteHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.httpsOnly">httpsOnly</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.outboundIpAddresses">outboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.outboundIpAddressList">outboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.possibleOutboundIpAddresses">possibleOutboundIpAddresses</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.possibleOutboundIpAddressList">possibleOutboundIpAddressList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.siteConfig">siteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList">DataAzurermAppServiceSiteConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.siteCredential">siteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList">DataAzurermAppServiceSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.sourceControl">sourceControl</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList">DataAzurermAppServiceSourceControlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference">DataAzurermAppServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeouts">DataAzurermAppServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `appServicePlanId`<sup>Required</sup> <a name="appServicePlanId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.appServicePlanId"></a>

```typescript
public readonly appServicePlanId: string;
```

- *Type:* string

---

##### `appSettings`<sup>Required</sup> <a name="appSettings" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.appSettings"></a>

```typescript
public readonly appSettings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `clientAffinityEnabled`<sup>Required</sup> <a name="clientAffinityEnabled" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.clientAffinityEnabled"></a>

```typescript
public readonly clientAffinityEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `clientCertEnabled`<sup>Required</sup> <a name="clientCertEnabled" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.clientCertEnabled"></a>

```typescript
public readonly clientCertEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.connectionString"></a>

```typescript
public readonly connectionString: DataAzurermAppServiceConnectionStringList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList">DataAzurermAppServiceConnectionStringList</a>

---

##### `customDomainVerificationId`<sup>Required</sup> <a name="customDomainVerificationId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.customDomainVerificationId"></a>

```typescript
public readonly customDomainVerificationId: string;
```

- *Type:* string

---

##### `defaultSiteHostname`<sup>Required</sup> <a name="defaultSiteHostname" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.defaultSiteHostname"></a>

```typescript
public readonly defaultSiteHostname: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `httpsOnly`<sup>Required</sup> <a name="httpsOnly" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.httpsOnly"></a>

```typescript
public readonly httpsOnly: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `outboundIpAddresses`<sup>Required</sup> <a name="outboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.outboundIpAddresses"></a>

```typescript
public readonly outboundIpAddresses: string;
```

- *Type:* string

---

##### `outboundIpAddressList`<sup>Required</sup> <a name="outboundIpAddressList" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.outboundIpAddressList"></a>

```typescript
public readonly outboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `possibleOutboundIpAddresses`<sup>Required</sup> <a name="possibleOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.possibleOutboundIpAddresses"></a>

```typescript
public readonly possibleOutboundIpAddresses: string;
```

- *Type:* string

---

##### `possibleOutboundIpAddressList`<sup>Required</sup> <a name="possibleOutboundIpAddressList" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.possibleOutboundIpAddressList"></a>

```typescript
public readonly possibleOutboundIpAddressList: string[];
```

- *Type:* string[]

---

##### `siteConfig`<sup>Required</sup> <a name="siteConfig" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.siteConfig"></a>

```typescript
public readonly siteConfig: DataAzurermAppServiceSiteConfigList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList">DataAzurermAppServiceSiteConfigList</a>

---

##### `siteCredential`<sup>Required</sup> <a name="siteCredential" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.siteCredential"></a>

```typescript
public readonly siteCredential: DataAzurermAppServiceSiteCredentialList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList">DataAzurermAppServiceSiteCredentialList</a>

---

##### `sourceControl`<sup>Required</sup> <a name="sourceControl" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.sourceControl"></a>

```typescript
public readonly sourceControl: DataAzurermAppServiceSourceControlList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList">DataAzurermAppServiceSourceControlList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermAppServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference">DataAzurermAppServiceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermAppServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeouts">DataAzurermAppServiceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermAppServiceConfig <a name="DataAzurermAppServiceConfig" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceConfig: dataAzurermAppService.DataAzurermAppServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/app_service#name DataAzurermAppService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/app_service#resource_group_name DataAzurermAppService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/app_service#id DataAzurermAppService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeouts">DataAzurermAppServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/app_service#name DataAzurermAppService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/app_service#resource_group_name DataAzurermAppService#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/app_service#id DataAzurermAppService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermAppServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeouts">DataAzurermAppServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/app_service#timeouts DataAzurermAppService#timeouts}

---

### DataAzurermAppServiceConnectionString <a name="DataAzurermAppServiceConnectionString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionString.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceConnectionString: dataAzurermAppService.DataAzurermAppServiceConnectionString = { ... }
```


### DataAzurermAppServiceSiteConfig <a name="DataAzurermAppServiceSiteConfig" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfig.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceSiteConfig: dataAzurermAppService.DataAzurermAppServiceSiteConfig = { ... }
```


### DataAzurermAppServiceSiteConfigCors <a name="DataAzurermAppServiceSiteConfigCors" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCors.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceSiteConfigCors: dataAzurermAppService.DataAzurermAppServiceSiteConfigCors = { ... }
```


### DataAzurermAppServiceSiteConfigIpRestriction <a name="DataAzurermAppServiceSiteConfigIpRestriction" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestriction.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceSiteConfigIpRestriction: dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestriction = { ... }
```


### DataAzurermAppServiceSiteConfigIpRestrictionHeaders <a name="DataAzurermAppServiceSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeaders.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceSiteConfigIpRestrictionHeaders: dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeaders = { ... }
```


### DataAzurermAppServiceSiteConfigScmIpRestriction <a name="DataAzurermAppServiceSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestriction.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceSiteConfigScmIpRestriction: dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestriction = { ... }
```


### DataAzurermAppServiceSiteConfigScmIpRestrictionHeaders <a name="DataAzurermAppServiceSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceSiteConfigScmIpRestrictionHeaders: dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeaders = { ... }
```


### DataAzurermAppServiceSiteCredential <a name="DataAzurermAppServiceSiteCredential" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredential.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceSiteCredential: dataAzurermAppService.DataAzurermAppServiceSiteCredential = { ... }
```


### DataAzurermAppServiceSourceControl <a name="DataAzurermAppServiceSourceControl" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControl.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceSourceControl: dataAzurermAppService.DataAzurermAppServiceSourceControl = { ... }
```


### DataAzurermAppServiceTimeouts <a name="DataAzurermAppServiceTimeouts" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeouts.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

const dataAzurermAppServiceTimeouts: dataAzurermAppService.DataAzurermAppServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/app_service#read DataAzurermAppService#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.1.0/docs/data-sources/app_service#read DataAzurermAppService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermAppServiceConnectionStringList <a name="DataAzurermAppServiceConnectionStringList" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceConnectionStringList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.get"></a>

```typescript
public get(index: number): DataAzurermAppServiceConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAppServiceConnectionStringOutputReference <a name="DataAzurermAppServiceConnectionStringOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionString">DataAzurermAppServiceConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionStringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAppServiceConnectionString;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceConnectionString">DataAzurermAppServiceConnectionString</a>

---


### DataAzurermAppServiceSiteConfigCorsList <a name="DataAzurermAppServiceSiteConfigCorsList" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.get"></a>

```typescript
public get(index: number): DataAzurermAppServiceSiteConfigCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAppServiceSiteConfigCorsOutputReference <a name="DataAzurermAppServiceSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.property.supportCredentials">supportCredentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCors">DataAzurermAppServiceSiteConfigCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `supportCredentials`<sup>Required</sup> <a name="supportCredentials" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.property.supportCredentials"></a>

```typescript
public readonly supportCredentials: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAppServiceSiteConfigCors;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCors">DataAzurermAppServiceSiteConfigCors</a>

---


### DataAzurermAppServiceSiteConfigIpRestrictionHeadersList <a name="DataAzurermAppServiceSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference <a name="DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeaders">DataAzurermAppServiceSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAppServiceSiteConfigIpRestrictionHeaders;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeaders">DataAzurermAppServiceSiteConfigIpRestrictionHeaders</a>

---


### DataAzurermAppServiceSiteConfigIpRestrictionList <a name="DataAzurermAppServiceSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.get"></a>

```typescript
public get(index: number): DataAzurermAppServiceSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAppServiceSiteConfigIpRestrictionOutputReference <a name="DataAzurermAppServiceSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList">DataAzurermAppServiceSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestriction">DataAzurermAppServiceSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: DataAzurermAppServiceSiteConfigIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionHeadersList">DataAzurermAppServiceSiteConfigIpRestrictionHeadersList</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAppServiceSiteConfigIpRestriction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestriction">DataAzurermAppServiceSiteConfigIpRestriction</a>

---


### DataAzurermAppServiceSiteConfigList <a name="DataAzurermAppServiceSiteConfigList" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.get"></a>

```typescript
public get(index: number): DataAzurermAppServiceSiteConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAppServiceSiteConfigOutputReference <a name="DataAzurermAppServiceSiteConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.acrUseManagedIdentityCredentials">acrUseManagedIdentityCredentials</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.acrUserManagedIdentityClientId">acrUserManagedIdentityClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.alwaysOn">alwaysOn</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.appCommandLine">appCommandLine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList">DataAzurermAppServiceSiteConfigCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.defaultDocuments">defaultDocuments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.dotnetFrameworkVersion">dotnetFrameworkVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.ftpsState">ftpsState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.healthCheckPath">healthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.http2Enabled">http2Enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.ipRestriction">ipRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList">DataAzurermAppServiceSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.javaContainer">javaContainer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.javaContainerVersion">javaContainerVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.javaVersion">javaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.linuxFxVersion">linuxFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.localMysqlEnabled">localMysqlEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.managedPipelineMode">managedPipelineMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.minTlsVersion">minTlsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.numberOfWorkers">numberOfWorkers</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.phpVersion">phpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.pythonVersion">pythonVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.remoteDebuggingEnabled">remoteDebuggingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.remoteDebuggingVersion">remoteDebuggingVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.scmIpRestriction">scmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList">DataAzurermAppServiceSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.scmType">scmType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.scmUseMainIpRestriction">scmUseMainIpRestriction</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.use32BitWorkerProcess">use32BitWorkerProcess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.vnetRouteAllEnabled">vnetRouteAllEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.websocketsEnabled">websocketsEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.windowsFxVersion">windowsFxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfig">DataAzurermAppServiceSiteConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acrUseManagedIdentityCredentials`<sup>Required</sup> <a name="acrUseManagedIdentityCredentials" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.acrUseManagedIdentityCredentials"></a>

```typescript
public readonly acrUseManagedIdentityCredentials: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `acrUserManagedIdentityClientId`<sup>Required</sup> <a name="acrUserManagedIdentityClientId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.acrUserManagedIdentityClientId"></a>

```typescript
public readonly acrUserManagedIdentityClientId: string;
```

- *Type:* string

---

##### `alwaysOn`<sup>Required</sup> <a name="alwaysOn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.alwaysOn"></a>

```typescript
public readonly alwaysOn: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `appCommandLine`<sup>Required</sup> <a name="appCommandLine" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.appCommandLine"></a>

```typescript
public readonly appCommandLine: string;
```

- *Type:* string

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.cors"></a>

```typescript
public readonly cors: DataAzurermAppServiceSiteConfigCorsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigCorsList">DataAzurermAppServiceSiteConfigCorsList</a>

---

##### `defaultDocuments`<sup>Required</sup> <a name="defaultDocuments" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.defaultDocuments"></a>

```typescript
public readonly defaultDocuments: string[];
```

- *Type:* string[]

---

##### `dotnetFrameworkVersion`<sup>Required</sup> <a name="dotnetFrameworkVersion" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.dotnetFrameworkVersion"></a>

```typescript
public readonly dotnetFrameworkVersion: string;
```

- *Type:* string

---

##### `ftpsState`<sup>Required</sup> <a name="ftpsState" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.ftpsState"></a>

```typescript
public readonly ftpsState: string;
```

- *Type:* string

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.healthCheckPath"></a>

```typescript
public readonly healthCheckPath: string;
```

- *Type:* string

---

##### `http2Enabled`<sup>Required</sup> <a name="http2Enabled" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.http2Enabled"></a>

```typescript
public readonly http2Enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ipRestriction`<sup>Required</sup> <a name="ipRestriction" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.ipRestriction"></a>

```typescript
public readonly ipRestriction: DataAzurermAppServiceSiteConfigIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigIpRestrictionList">DataAzurermAppServiceSiteConfigIpRestrictionList</a>

---

##### `javaContainer`<sup>Required</sup> <a name="javaContainer" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.javaContainer"></a>

```typescript
public readonly javaContainer: string;
```

- *Type:* string

---

##### `javaContainerVersion`<sup>Required</sup> <a name="javaContainerVersion" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.javaContainerVersion"></a>

```typescript
public readonly javaContainerVersion: string;
```

- *Type:* string

---

##### `javaVersion`<sup>Required</sup> <a name="javaVersion" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.javaVersion"></a>

```typescript
public readonly javaVersion: string;
```

- *Type:* string

---

##### `linuxFxVersion`<sup>Required</sup> <a name="linuxFxVersion" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.linuxFxVersion"></a>

```typescript
public readonly linuxFxVersion: string;
```

- *Type:* string

---

##### `localMysqlEnabled`<sup>Required</sup> <a name="localMysqlEnabled" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.localMysqlEnabled"></a>

```typescript
public readonly localMysqlEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `managedPipelineMode`<sup>Required</sup> <a name="managedPipelineMode" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.managedPipelineMode"></a>

```typescript
public readonly managedPipelineMode: string;
```

- *Type:* string

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.minTlsVersion"></a>

```typescript
public readonly minTlsVersion: string;
```

- *Type:* string

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.numberOfWorkers"></a>

```typescript
public readonly numberOfWorkers: number;
```

- *Type:* number

---

##### `phpVersion`<sup>Required</sup> <a name="phpVersion" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.phpVersion"></a>

```typescript
public readonly phpVersion: string;
```

- *Type:* string

---

##### `pythonVersion`<sup>Required</sup> <a name="pythonVersion" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.pythonVersion"></a>

```typescript
public readonly pythonVersion: string;
```

- *Type:* string

---

##### `remoteDebuggingEnabled`<sup>Required</sup> <a name="remoteDebuggingEnabled" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```typescript
public readonly remoteDebuggingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `remoteDebuggingVersion`<sup>Required</sup> <a name="remoteDebuggingVersion" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```typescript
public readonly remoteDebuggingVersion: string;
```

- *Type:* string

---

##### `scmIpRestriction`<sup>Required</sup> <a name="scmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.scmIpRestriction"></a>

```typescript
public readonly scmIpRestriction: DataAzurermAppServiceSiteConfigScmIpRestrictionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList">DataAzurermAppServiceSiteConfigScmIpRestrictionList</a>

---

##### `scmType`<sup>Required</sup> <a name="scmType" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.scmType"></a>

```typescript
public readonly scmType: string;
```

- *Type:* string

---

##### `scmUseMainIpRestriction`<sup>Required</sup> <a name="scmUseMainIpRestriction" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```typescript
public readonly scmUseMainIpRestriction: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `use32BitWorkerProcess`<sup>Required</sup> <a name="use32BitWorkerProcess" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.use32BitWorkerProcess"></a>

```typescript
public readonly use32BitWorkerProcess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `vnetRouteAllEnabled`<sup>Required</sup> <a name="vnetRouteAllEnabled" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```typescript
public readonly vnetRouteAllEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `websocketsEnabled`<sup>Required</sup> <a name="websocketsEnabled" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.websocketsEnabled"></a>

```typescript
public readonly websocketsEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `windowsFxVersion`<sup>Required</sup> <a name="windowsFxVersion" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.windowsFxVersion"></a>

```typescript
public readonly windowsFxVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAppServiceSiteConfig;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfig">DataAzurermAppServiceSiteConfig</a>

---


### DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList <a name="DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.get"></a>

```typescript
public get(index: number): DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference <a name="DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">xAzureFdid</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">xFdHealthProbe</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">xForwardedFor</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">xForwardedHost</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeaders">DataAzurermAppServiceSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `xAzureFdid`<sup>Required</sup> <a name="xAzureFdid" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```typescript
public readonly xAzureFdid: string[];
```

- *Type:* string[]

---

##### `xFdHealthProbe`<sup>Required</sup> <a name="xFdHealthProbe" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```typescript
public readonly xFdHealthProbe: string[];
```

- *Type:* string[]

---

##### `xForwardedFor`<sup>Required</sup> <a name="xForwardedFor" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```typescript
public readonly xForwardedFor: string[];
```

- *Type:* string[]

---

##### `xForwardedHost`<sup>Required</sup> <a name="xForwardedHost" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```typescript
public readonly xForwardedHost: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAppServiceSiteConfigScmIpRestrictionHeaders;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeaders">DataAzurermAppServiceSiteConfigScmIpRestrictionHeaders</a>

---


### DataAzurermAppServiceSiteConfigScmIpRestrictionList <a name="DataAzurermAppServiceSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.get"></a>

```typescript
public get(index: number): DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference <a name="DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList">DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.serviceTag">serviceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">virtualNetworkSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestriction">DataAzurermAppServiceSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```typescript
public readonly headers: DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList">DataAzurermAppServiceSiteConfigScmIpRestrictionHeadersList</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `serviceTag`<sup>Required</sup> <a name="serviceTag" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```typescript
public readonly serviceTag: string;
```

- *Type:* string

---

##### `virtualNetworkSubnetId`<sup>Required</sup> <a name="virtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```typescript
public readonly virtualNetworkSubnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAppServiceSiteConfigScmIpRestriction;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteConfigScmIpRestriction">DataAzurermAppServiceSiteConfigScmIpRestriction</a>

---


### DataAzurermAppServiceSiteCredentialList <a name="DataAzurermAppServiceSiteCredentialList" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteCredentialList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.get"></a>

```typescript
public get(index: number): DataAzurermAppServiceSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAppServiceSiteCredentialOutputReference <a name="DataAzurermAppServiceSiteCredentialOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredential">DataAzurermAppServiceSiteCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAppServiceSiteCredential;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSiteCredential">DataAzurermAppServiceSiteCredential</a>

---


### DataAzurermAppServiceSourceControlList <a name="DataAzurermAppServiceSourceControlList" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSourceControlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.get"></a>

```typescript
public get(index: number): DataAzurermAppServiceSourceControlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermAppServiceSourceControlOutputReference <a name="DataAzurermAppServiceSourceControlOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.branch">branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.manualIntegration">manualIntegration</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.repoUrl">repoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.rollbackEnabled">rollbackEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.useMercurial">useMercurial</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControl">DataAzurermAppServiceSourceControl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.branch"></a>

```typescript
public readonly branch: string;
```

- *Type:* string

---

##### `manualIntegration`<sup>Required</sup> <a name="manualIntegration" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.manualIntegration"></a>

```typescript
public readonly manualIntegration: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `repoUrl`<sup>Required</sup> <a name="repoUrl" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.repoUrl"></a>

```typescript
public readonly repoUrl: string;
```

- *Type:* string

---

##### `rollbackEnabled`<sup>Required</sup> <a name="rollbackEnabled" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.rollbackEnabled"></a>

```typescript
public readonly rollbackEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `useMercurial`<sup>Required</sup> <a name="useMercurial" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.useMercurial"></a>

```typescript
public readonly useMercurial: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermAppServiceSourceControl;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceSourceControl">DataAzurermAppServiceSourceControl</a>

---


### DataAzurermAppServiceTimeoutsOutputReference <a name="DataAzurermAppServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermAppService } from '@cdktf/provider-azurerm'

new dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeouts">DataAzurermAppServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermAppServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermAppService.DataAzurermAppServiceTimeouts">DataAzurermAppServiceTimeouts</a>

---



