# `dataAzurermSpringCloudService` Submodule <a name="`dataAzurermSpringCloudService` Submodule" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermSpringCloudService <a name="DataAzurermSpringCloudService" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/spring_cloud_service azurerm_spring_cloud_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudService(scope: Construct, id: string, config: DataAzurermSpringCloudServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig">DataAzurermSpringCloudServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig">DataAzurermSpringCloudServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermSpringCloudServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts">DataAzurermSpringCloudServiceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermSpringCloudService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isConstruct"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

dataAzurermSpringCloudService.DataAzurermSpringCloudService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformElement"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformDataSource"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermSpringCloudService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermSpringCloudService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermSpringCloudService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/spring_cloud_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermSpringCloudService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.configServerGitSetting">configServerGitSetting</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList">DataAzurermSpringCloudServiceConfigServerGitSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.outboundPublicIpAddresses">outboundPublicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.requiredNetworkTrafficRules">requiredNetworkTrafficRules</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList">DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference">DataAzurermSpringCloudServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts">DataAzurermSpringCloudServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `configServerGitSetting`<sup>Required</sup> <a name="configServerGitSetting" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.configServerGitSetting"></a>

```typescript
public readonly configServerGitSetting: DataAzurermSpringCloudServiceConfigServerGitSettingList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList">DataAzurermSpringCloudServiceConfigServerGitSettingList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `outboundPublicIpAddresses`<sup>Required</sup> <a name="outboundPublicIpAddresses" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.outboundPublicIpAddresses"></a>

```typescript
public readonly outboundPublicIpAddresses: string[];
```

- *Type:* string[]

---

##### `requiredNetworkTrafficRules`<sup>Required</sup> <a name="requiredNetworkTrafficRules" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.requiredNetworkTrafficRules"></a>

```typescript
public readonly requiredNetworkTrafficRules: DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList">DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermSpringCloudServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference">DataAzurermSpringCloudServiceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermSpringCloudServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts">DataAzurermSpringCloudServiceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermSpringCloudServiceConfig <a name="DataAzurermSpringCloudServiceConfig" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

const dataAzurermSpringCloudServiceConfig: dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/spring_cloud_service#name DataAzurermSpringCloudService#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/spring_cloud_service#resource_group_name DataAzurermSpringCloudService#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/spring_cloud_service#id DataAzurermSpringCloudService#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts">DataAzurermSpringCloudServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/spring_cloud_service#name DataAzurermSpringCloudService#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/spring_cloud_service#resource_group_name DataAzurermSpringCloudService#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/spring_cloud_service#id DataAzurermSpringCloudService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermSpringCloudServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts">DataAzurermSpringCloudServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/spring_cloud_service#timeouts DataAzurermSpringCloudService#timeouts}

---

### DataAzurermSpringCloudServiceConfigServerGitSetting <a name="DataAzurermSpringCloudServiceConfigServerGitSetting" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSetting.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

const dataAzurermSpringCloudServiceConfigServerGitSetting: dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSetting = { ... }
```


### DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth <a name="DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

const dataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth: dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth = { ... }
```


### DataAzurermSpringCloudServiceConfigServerGitSettingRepository <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepository" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepository.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

const dataAzurermSpringCloudServiceConfigServerGitSettingRepository: dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepository = { ... }
```


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

const dataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth: dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth = { ... }
```


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

const dataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth: dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth = { ... }
```


### DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth <a name="DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

const dataAzurermSpringCloudServiceConfigServerGitSettingSshAuth: dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth = { ... }
```


### DataAzurermSpringCloudServiceRequiredNetworkTrafficRules <a name="DataAzurermSpringCloudServiceRequiredNetworkTrafficRules" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRules.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

const dataAzurermSpringCloudServiceRequiredNetworkTrafficRules: dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRules = { ... }
```


### DataAzurermSpringCloudServiceTimeouts <a name="DataAzurermSpringCloudServiceTimeouts" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

const dataAzurermSpringCloudServiceTimeouts: dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/spring_cloud_service#read DataAzurermSpringCloudService#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.85.0/docs/data-sources/spring_cloud_service#read DataAzurermSpringCloudService#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.get"></a>

```typescript
public get(index: number): DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth">DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth">DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuth</a>

---


### DataAzurermSpringCloudServiceConfigServerGitSettingList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.get"></a>

```typescript
public get(index: number): DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuth">httpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.repository">repository</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.searchPaths">searchPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuth">sshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSetting">DataAzurermSpringCloudServiceConfigServerGitSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpBasicAuth`<sup>Required</sup> <a name="httpBasicAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.httpBasicAuth"></a>

```typescript
public readonly httpBasicAuth: DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingHttpBasicAuthList</a>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.repository"></a>

```typescript
public readonly repository: DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList</a>

---

##### `searchPaths`<sup>Required</sup> <a name="searchPaths" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.searchPaths"></a>

```typescript
public readonly searchPaths: string[];
```

- *Type:* string[]

---

##### `sshAuth`<sup>Required</sup> <a name="sshAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.sshAuth"></a>

```typescript
public readonly sshAuth: DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermSpringCloudServiceConfigServerGitSetting;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSetting">DataAzurermSpringCloudServiceConfigServerGitSetting</a>

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.get"></a>

```typescript
public get(index: number): DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuth</a>

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.get"></a>

```typescript
public get(index: number): DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuth">httpBasicAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.pattern">pattern</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPaths">searchPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuth">sshAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepository">DataAzurermSpringCloudServiceConfigServerGitSettingRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `httpBasicAuth`<sup>Required</sup> <a name="httpBasicAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.httpBasicAuth"></a>

```typescript
public readonly httpBasicAuth: DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryHttpBasicAuthList</a>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.pattern"></a>

```typescript
public readonly pattern: string[];
```

- *Type:* string[]

---

##### `searchPaths`<sup>Required</sup> <a name="searchPaths" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.searchPaths"></a>

```typescript
public readonly searchPaths: string[];
```

- *Type:* string[]

---

##### `sshAuth`<sup>Required</sup> <a name="sshAuth" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.sshAuth"></a>

```typescript
public readonly sshAuth: DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList">DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermSpringCloudServiceConfigServerGitSettingRepository;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepository">DataAzurermSpringCloudServiceConfigServerGitSettingRepository</a>

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.get"></a>

```typescript
public get(index: number): DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKey">hostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabled">strictHostKeyCheckingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth">DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostKey`<sup>Required</sup> <a name="hostKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKey"></a>

```typescript
public readonly hostKey: string;
```

- *Type:* string

---

##### `hostKeyAlgorithm`<sup>Required</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.hostKeyAlgorithm"></a>

```typescript
public readonly hostKeyAlgorithm: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `strictHostKeyCheckingEnabled`<sup>Required</sup> <a name="strictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.strictHostKeyCheckingEnabled"></a>

```typescript
public readonly strictHostKeyCheckingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth">DataAzurermSpringCloudServiceConfigServerGitSettingRepositorySshAuth</a>

---


### DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList <a name="DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.get"></a>

```typescript
public get(index: number): DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference <a name="DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKey">hostKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithm">hostKeyAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabled">strictHostKeyCheckingEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth">DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostKey`<sup>Required</sup> <a name="hostKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKey"></a>

```typescript
public readonly hostKey: string;
```

- *Type:* string

---

##### `hostKeyAlgorithm`<sup>Required</sup> <a name="hostKeyAlgorithm" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.hostKeyAlgorithm"></a>

```typescript
public readonly hostKeyAlgorithm: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `strictHostKeyCheckingEnabled`<sup>Required</sup> <a name="strictHostKeyCheckingEnabled" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.strictHostKeyCheckingEnabled"></a>

```typescript
public readonly strictHostKeyCheckingEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth">DataAzurermSpringCloudServiceConfigServerGitSettingSshAuth</a>

---


### DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList <a name="DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.get"></a>

```typescript
public get(index: number): DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference <a name="DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqdns">fqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRules">DataAzurermSpringCloudServiceRequiredNetworkTrafficRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `fqdns`<sup>Required</sup> <a name="fqdns" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.fqdns"></a>

```typescript
public readonly fqdns: string[];
```

- *Type:* string[]

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.ipAddresses"></a>

```typescript
public readonly ipAddresses: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermSpringCloudServiceRequiredNetworkTrafficRules;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceRequiredNetworkTrafficRules">DataAzurermSpringCloudServiceRequiredNetworkTrafficRules</a>

---


### DataAzurermSpringCloudServiceTimeoutsOutputReference <a name="DataAzurermSpringCloudServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermSpringCloudService } from '@cdktf/provider-azurerm'

new dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts">DataAzurermSpringCloudServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermSpringCloudServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermSpringCloudService.DataAzurermSpringCloudServiceTimeouts">DataAzurermSpringCloudServiceTimeouts</a>

---



