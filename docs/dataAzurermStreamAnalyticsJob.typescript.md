# `dataAzurermStreamAnalyticsJob` Submodule <a name="`dataAzurermStreamAnalyticsJob` Submodule" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermStreamAnalyticsJob <a name="DataAzurermStreamAnalyticsJob" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/stream_analytics_job azurerm_stream_analytics_job}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer"></a>

```typescript
import { dataAzurermStreamAnalyticsJob } from '@cdktf/provider-azurerm'

new dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob(scope: Construct, id: string, config: DataAzurermStreamAnalyticsJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig">DataAzurermStreamAnalyticsJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig">DataAzurermStreamAnalyticsJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermStreamAnalyticsJobTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermStreamAnalyticsJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isConstruct"></a>

```typescript
import { dataAzurermStreamAnalyticsJob } from '@cdktf/provider-azurerm'

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformElement"></a>

```typescript
import { dataAzurermStreamAnalyticsJob } from '@cdktf/provider-azurerm'

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformDataSource"></a>

```typescript
import { dataAzurermStreamAnalyticsJob } from '@cdktf/provider-azurerm'

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.generateConfigForImport"></a>

```typescript
import { dataAzurermStreamAnalyticsJob } from '@cdktf/provider-azurerm'

dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermStreamAnalyticsJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermStreamAnalyticsJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermStreamAnalyticsJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/stream_analytics_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermStreamAnalyticsJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.compatibilityLevel">compatibilityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.dataLocale">dataLocale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSeconds">eventsLateArrivalMaxDelayInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSeconds">eventsOutOfOrderMaxDelayInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsOutOfOrderPolicy">eventsOutOfOrderPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList">DataAzurermStreamAnalyticsJobIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.lastOutputTime">lastOutputTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.outputErrorPolicy">outputErrorPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.skuName">skuName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.startMode">startMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.streamingUnits">streamingUnits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference">DataAzurermStreamAnalyticsJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.transformationQuery">transformationQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `compatibilityLevel`<sup>Required</sup> <a name="compatibilityLevel" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.compatibilityLevel"></a>

```typescript
public readonly compatibilityLevel: string;
```

- *Type:* string

---

##### `dataLocale`<sup>Required</sup> <a name="dataLocale" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.dataLocale"></a>

```typescript
public readonly dataLocale: string;
```

- *Type:* string

---

##### `eventsLateArrivalMaxDelayInSeconds`<sup>Required</sup> <a name="eventsLateArrivalMaxDelayInSeconds" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsLateArrivalMaxDelayInSeconds"></a>

```typescript
public readonly eventsLateArrivalMaxDelayInSeconds: number;
```

- *Type:* number

---

##### `eventsOutOfOrderMaxDelayInSeconds`<sup>Required</sup> <a name="eventsOutOfOrderMaxDelayInSeconds" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsOutOfOrderMaxDelayInSeconds"></a>

```typescript
public readonly eventsOutOfOrderMaxDelayInSeconds: number;
```

- *Type:* number

---

##### `eventsOutOfOrderPolicy`<sup>Required</sup> <a name="eventsOutOfOrderPolicy" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.eventsOutOfOrderPolicy"></a>

```typescript
public readonly eventsOutOfOrderPolicy: string;
```

- *Type:* string

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.identity"></a>

```typescript
public readonly identity: DataAzurermStreamAnalyticsJobIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList">DataAzurermStreamAnalyticsJobIdentityList</a>

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

##### `lastOutputTime`<sup>Required</sup> <a name="lastOutputTime" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.lastOutputTime"></a>

```typescript
public readonly lastOutputTime: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `outputErrorPolicy`<sup>Required</sup> <a name="outputErrorPolicy" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.outputErrorPolicy"></a>

```typescript
public readonly outputErrorPolicy: string;
```

- *Type:* string

---

##### `skuName`<sup>Required</sup> <a name="skuName" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.skuName"></a>

```typescript
public readonly skuName: string;
```

- *Type:* string

---

##### `startMode`<sup>Required</sup> <a name="startMode" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.startMode"></a>

```typescript
public readonly startMode: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `streamingUnits`<sup>Required</sup> <a name="streamingUnits" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.streamingUnits"></a>

```typescript
public readonly streamingUnits: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStreamAnalyticsJobTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference">DataAzurermStreamAnalyticsJobTimeoutsOutputReference</a>

---

##### `transformationQuery`<sup>Required</sup> <a name="transformationQuery" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.transformationQuery"></a>

```typescript
public readonly transformationQuery: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermStreamAnalyticsJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermStreamAnalyticsJobConfig <a name="DataAzurermStreamAnalyticsJobConfig" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.Initializer"></a>

```typescript
import { dataAzurermStreamAnalyticsJob } from '@cdktf/provider-azurerm'

const dataAzurermStreamAnalyticsJobConfig: dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/stream_analytics_job#name DataAzurermStreamAnalyticsJob#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/stream_analytics_job#resource_group_name DataAzurermStreamAnalyticsJob#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/stream_analytics_job#id DataAzurermStreamAnalyticsJob#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/stream_analytics_job#name DataAzurermStreamAnalyticsJob#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/stream_analytics_job#resource_group_name DataAzurermStreamAnalyticsJob#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/stream_analytics_job#id DataAzurermStreamAnalyticsJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermStreamAnalyticsJobTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/stream_analytics_job#timeouts DataAzurermStreamAnalyticsJob#timeouts}

---

### DataAzurermStreamAnalyticsJobIdentity <a name="DataAzurermStreamAnalyticsJobIdentity" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentity.Initializer"></a>

```typescript
import { dataAzurermStreamAnalyticsJob } from '@cdktf/provider-azurerm'

const dataAzurermStreamAnalyticsJobIdentity: dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentity = { ... }
```


### DataAzurermStreamAnalyticsJobTimeouts <a name="DataAzurermStreamAnalyticsJobTimeouts" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts.Initializer"></a>

```typescript
import { dataAzurermStreamAnalyticsJob } from '@cdktf/provider-azurerm'

const dataAzurermStreamAnalyticsJobTimeouts: dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/stream_analytics_job#read DataAzurermStreamAnalyticsJob#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/stream_analytics_job#read DataAzurermStreamAnalyticsJob#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermStreamAnalyticsJobIdentityList <a name="DataAzurermStreamAnalyticsJobIdentityList" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer"></a>

```typescript
import { dataAzurermStreamAnalyticsJob } from '@cdktf/provider-azurerm'

new dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermStreamAnalyticsJobIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermStreamAnalyticsJobIdentityOutputReference <a name="DataAzurermStreamAnalyticsJobIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermStreamAnalyticsJob } from '@cdktf/provider-azurerm'

new dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentity">DataAzurermStreamAnalyticsJobIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermStreamAnalyticsJobIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobIdentity">DataAzurermStreamAnalyticsJobIdentity</a>

---


### DataAzurermStreamAnalyticsJobTimeoutsOutputReference <a name="DataAzurermStreamAnalyticsJobTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermStreamAnalyticsJob } from '@cdktf/provider-azurerm'

new dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermStreamAnalyticsJobTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermStreamAnalyticsJob.DataAzurermStreamAnalyticsJobTimeouts">DataAzurermStreamAnalyticsJobTimeouts</a>

---



