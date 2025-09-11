# `dataAzurermNginxDeployment` Submodule <a name="`dataAzurermNginxDeployment` Submodule" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNginxDeployment <a name="DataAzurermNginxDeployment" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/nginx_deployment azurerm_nginx_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeployment(scope: Construct, id: string, config: DataAzurermNginxDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig">DataAzurermNginxDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig">DataAzurermNginxDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermNginxDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts">DataAzurermNginxDeploymentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermNginxDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.isConstruct"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

dataAzurermNginxDeployment.DataAzurermNginxDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.isTerraformElement"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

dataAzurermNginxDeployment.DataAzurermNginxDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.isTerraformDataSource"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

dataAzurermNginxDeployment.DataAzurermNginxDeployment.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.generateConfigForImport"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

dataAzurermNginxDeployment.DataAzurermNginxDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermNginxDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermNginxDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermNginxDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/nginx_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermNginxDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.automaticUpgradeChannel">automaticUpgradeChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.autoScaleProfile">autoScaleProfile</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList">DataAzurermNginxDeploymentAutoScaleProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.capacity">capacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.dataplaneApiEndpoint">dataplaneApiEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.diagnoseSupportEnabled">diagnoseSupportEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.frontendPrivate">frontendPrivate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList">DataAzurermNginxDeploymentFrontendPrivateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.frontendPublic">frontendPublic</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList">DataAzurermNginxDeploymentFrontendPublicList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList">DataAzurermNginxDeploymentIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.loggingStorageAccount">loggingStorageAccount</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList">DataAzurermNginxDeploymentLoggingStorageAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.managedResourceGroup">managedResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList">DataAzurermNginxDeploymentNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.nginxVersion">nginxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.sku">sku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference">DataAzurermNginxDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.webApplicationFirewall">webApplicationFirewall</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList">DataAzurermNginxDeploymentWebApplicationFirewallList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts">DataAzurermNginxDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `automaticUpgradeChannel`<sup>Required</sup> <a name="automaticUpgradeChannel" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.automaticUpgradeChannel"></a>

```typescript
public readonly automaticUpgradeChannel: string;
```

- *Type:* string

---

##### `autoScaleProfile`<sup>Required</sup> <a name="autoScaleProfile" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.autoScaleProfile"></a>

```typescript
public readonly autoScaleProfile: DataAzurermNginxDeploymentAutoScaleProfileList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList">DataAzurermNginxDeploymentAutoScaleProfileList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.capacity"></a>

```typescript
public readonly capacity: number;
```

- *Type:* number

---

##### `dataplaneApiEndpoint`<sup>Required</sup> <a name="dataplaneApiEndpoint" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.dataplaneApiEndpoint"></a>

```typescript
public readonly dataplaneApiEndpoint: string;
```

- *Type:* string

---

##### `diagnoseSupportEnabled`<sup>Required</sup> <a name="diagnoseSupportEnabled" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.diagnoseSupportEnabled"></a>

```typescript
public readonly diagnoseSupportEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `frontendPrivate`<sup>Required</sup> <a name="frontendPrivate" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.frontendPrivate"></a>

```typescript
public readonly frontendPrivate: DataAzurermNginxDeploymentFrontendPrivateList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList">DataAzurermNginxDeploymentFrontendPrivateList</a>

---

##### `frontendPublic`<sup>Required</sup> <a name="frontendPublic" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.frontendPublic"></a>

```typescript
public readonly frontendPublic: DataAzurermNginxDeploymentFrontendPublicList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList">DataAzurermNginxDeploymentFrontendPublicList</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.identity"></a>

```typescript
public readonly identity: DataAzurermNginxDeploymentIdentityList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList">DataAzurermNginxDeploymentIdentityList</a>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `loggingStorageAccount`<sup>Required</sup> <a name="loggingStorageAccount" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.loggingStorageAccount"></a>

```typescript
public readonly loggingStorageAccount: DataAzurermNginxDeploymentLoggingStorageAccountList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList">DataAzurermNginxDeploymentLoggingStorageAccountList</a>

---

##### `managedResourceGroup`<sup>Required</sup> <a name="managedResourceGroup" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.managedResourceGroup"></a>

```typescript
public readonly managedResourceGroup: string;
```

- *Type:* string

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.networkInterface"></a>

```typescript
public readonly networkInterface: DataAzurermNginxDeploymentNetworkInterfaceList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList">DataAzurermNginxDeploymentNetworkInterfaceList</a>

---

##### `nginxVersion`<sup>Required</sup> <a name="nginxVersion" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.nginxVersion"></a>

```typescript
public readonly nginxVersion: string;
```

- *Type:* string

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.sku"></a>

```typescript
public readonly sku: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNginxDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference">DataAzurermNginxDeploymentTimeoutsOutputReference</a>

---

##### `webApplicationFirewall`<sup>Required</sup> <a name="webApplicationFirewall" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.webApplicationFirewall"></a>

```typescript
public readonly webApplicationFirewall: DataAzurermNginxDeploymentWebApplicationFirewallList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList">DataAzurermNginxDeploymentWebApplicationFirewallList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermNginxDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts">DataAzurermNginxDeploymentTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNginxDeploymentAutoScaleProfile <a name="DataAzurermNginxDeploymentAutoScaleProfile" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfile.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentAutoScaleProfile: dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfile = { ... }
```


### DataAzurermNginxDeploymentConfig <a name="DataAzurermNginxDeploymentConfig" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentConfig: dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/nginx_deployment#name DataAzurermNginxDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/nginx_deployment#resource_group_name DataAzurermNginxDeployment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/nginx_deployment#id DataAzurermNginxDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts">DataAzurermNginxDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/nginx_deployment#name DataAzurermNginxDeployment#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/nginx_deployment#resource_group_name DataAzurermNginxDeployment#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/nginx_deployment#id DataAzurermNginxDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermNginxDeploymentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts">DataAzurermNginxDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/nginx_deployment#timeouts DataAzurermNginxDeployment#timeouts}

---

### DataAzurermNginxDeploymentFrontendPrivate <a name="DataAzurermNginxDeploymentFrontendPrivate" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivate.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentFrontendPrivate: dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivate = { ... }
```


### DataAzurermNginxDeploymentFrontendPublic <a name="DataAzurermNginxDeploymentFrontendPublic" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublic.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentFrontendPublic: dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublic = { ... }
```


### DataAzurermNginxDeploymentIdentity <a name="DataAzurermNginxDeploymentIdentity" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentity.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentIdentity: dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentity = { ... }
```


### DataAzurermNginxDeploymentLoggingStorageAccount <a name="DataAzurermNginxDeploymentLoggingStorageAccount" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccount.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentLoggingStorageAccount: dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccount = { ... }
```


### DataAzurermNginxDeploymentNetworkInterface <a name="DataAzurermNginxDeploymentNetworkInterface" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterface.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentNetworkInterface: dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterface = { ... }
```


### DataAzurermNginxDeploymentTimeouts <a name="DataAzurermNginxDeploymentTimeouts" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentTimeouts: dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/nginx_deployment#read DataAzurermNginxDeployment#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.44.0/docs/data-sources/nginx_deployment#read DataAzurermNginxDeployment#read}.

---

### DataAzurermNginxDeploymentWebApplicationFirewall <a name="DataAzurermNginxDeploymentWebApplicationFirewall" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewall.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentWebApplicationFirewall: dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewall = { ... }
```


### DataAzurermNginxDeploymentWebApplicationFirewallStatus <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatus" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatus.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentWebApplicationFirewallStatus: dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatus = { ... }
```


### DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage: dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage = { ... }
```


### DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage: dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage = { ... }
```


### DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersions <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersions" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersions.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersions: dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersions = { ... }
```


### DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

const dataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage: dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNginxDeploymentAutoScaleProfileList <a name="DataAzurermNginxDeploymentAutoScaleProfileList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentAutoScaleProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentAutoScaleProfileOutputReference <a name="DataAzurermNginxDeploymentAutoScaleProfileOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.minCapacity">minCapacity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfile">DataAzurermNginxDeploymentAutoScaleProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.maxCapacity"></a>

```typescript
public readonly maxCapacity: number;
```

- *Type:* number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.minCapacity"></a>

```typescript
public readonly minCapacity: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentAutoScaleProfile;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentAutoScaleProfile">DataAzurermNginxDeploymentAutoScaleProfile</a>

---


### DataAzurermNginxDeploymentFrontendPrivateList <a name="DataAzurermNginxDeploymentFrontendPrivateList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentFrontendPrivateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentFrontendPrivateOutputReference <a name="DataAzurermNginxDeploymentFrontendPrivateOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.allocationMethod">allocationMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivate">DataAzurermNginxDeploymentFrontendPrivate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allocationMethod`<sup>Required</sup> <a name="allocationMethod" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.allocationMethod"></a>

```typescript
public readonly allocationMethod: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentFrontendPrivate;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPrivate">DataAzurermNginxDeploymentFrontendPrivate</a>

---


### DataAzurermNginxDeploymentFrontendPublicList <a name="DataAzurermNginxDeploymentFrontendPublicList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentFrontendPublicOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentFrontendPublicOutputReference <a name="DataAzurermNginxDeploymentFrontendPublicOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.property.ipAddress">ipAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublic">DataAzurermNginxDeploymentFrontendPublic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentFrontendPublic;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentFrontendPublic">DataAzurermNginxDeploymentFrontendPublic</a>

---


### DataAzurermNginxDeploymentIdentityList <a name="DataAzurermNginxDeploymentIdentityList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentIdentityOutputReference <a name="DataAzurermNginxDeploymentIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentity">DataAzurermNginxDeploymentIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentIdentity">DataAzurermNginxDeploymentIdentity</a>

---


### DataAzurermNginxDeploymentLoggingStorageAccountList <a name="DataAzurermNginxDeploymentLoggingStorageAccountList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentLoggingStorageAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentLoggingStorageAccountOutputReference <a name="DataAzurermNginxDeploymentLoggingStorageAccountOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccount">DataAzurermNginxDeploymentLoggingStorageAccount</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccountOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentLoggingStorageAccount;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentLoggingStorageAccount">DataAzurermNginxDeploymentLoggingStorageAccount</a>

---


### DataAzurermNginxDeploymentNetworkInterfaceList <a name="DataAzurermNginxDeploymentNetworkInterfaceList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentNetworkInterfaceOutputReference <a name="DataAzurermNginxDeploymentNetworkInterfaceOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterface">DataAzurermNginxDeploymentNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentNetworkInterface;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentNetworkInterface">DataAzurermNginxDeploymentNetworkInterface</a>

---


### DataAzurermNginxDeploymentTimeoutsOutputReference <a name="DataAzurermNginxDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts">DataAzurermNginxDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermNginxDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentTimeouts">DataAzurermNginxDeploymentTimeouts</a>

---


### DataAzurermNginxDeploymentWebApplicationFirewallList <a name="DataAzurermNginxDeploymentWebApplicationFirewallList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentWebApplicationFirewallOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentWebApplicationFirewallOutputReference <a name="DataAzurermNginxDeploymentWebApplicationFirewallOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.property.activationStateEnabled">activationStateEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.property.status">status</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList">DataAzurermNginxDeploymentWebApplicationFirewallStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewall">DataAzurermNginxDeploymentWebApplicationFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activationStateEnabled`<sup>Required</sup> <a name="activationStateEnabled" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.property.activationStateEnabled"></a>

```typescript
public readonly activationStateEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.property.status"></a>

```typescript
public readonly status: DataAzurermNginxDeploymentWebApplicationFirewallStatusList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList">DataAzurermNginxDeploymentWebApplicationFirewallStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentWebApplicationFirewall;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewall">DataAzurermNginxDeploymentWebApplicationFirewall</a>

---


### DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.revisionDatetime">revisionDatetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage">DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revisionDatetime`<sup>Required</sup> <a name="revisionDatetime" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.revisionDatetime"></a>

```typescript
public readonly revisionDatetime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage">DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackage</a>

---


### DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.revisionDatetime">revisionDatetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage">DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revisionDatetime`<sup>Required</sup> <a name="revisionDatetime" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.revisionDatetime"></a>

```typescript
public readonly revisionDatetime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage">DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackage</a>

---


### DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafEngineVersion">wafEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafNginxVersion">wafNginxVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersions">DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `wafEngineVersion`<sup>Required</sup> <a name="wafEngineVersion" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafEngineVersion"></a>

```typescript
public readonly wafEngineVersion: string;
```

- *Type:* string

---

##### `wafNginxVersion`<sup>Required</sup> <a name="wafNginxVersion" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.wafNginxVersion"></a>

```typescript
public readonly wafNginxVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersions;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersions">DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersions</a>

---


### DataAzurermNginxDeploymentWebApplicationFirewallStatusList <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.attackSignaturesPackage">attackSignaturesPackage</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList">DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.botSignaturesPackage">botSignaturesPackage</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList">DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.componentVersions">componentVersions</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList">DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.threatCampaignsPackage">threatCampaignsPackage</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList">DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatus">DataAzurermNginxDeploymentWebApplicationFirewallStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attackSignaturesPackage`<sup>Required</sup> <a name="attackSignaturesPackage" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.attackSignaturesPackage"></a>

```typescript
public readonly attackSignaturesPackage: DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList">DataAzurermNginxDeploymentWebApplicationFirewallStatusAttackSignaturesPackageList</a>

---

##### `botSignaturesPackage`<sup>Required</sup> <a name="botSignaturesPackage" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.botSignaturesPackage"></a>

```typescript
public readonly botSignaturesPackage: DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList">DataAzurermNginxDeploymentWebApplicationFirewallStatusBotSignaturesPackageList</a>

---

##### `componentVersions`<sup>Required</sup> <a name="componentVersions" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.componentVersions"></a>

```typescript
public readonly componentVersions: DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList">DataAzurermNginxDeploymentWebApplicationFirewallStatusComponentVersionsList</a>

---

##### `threatCampaignsPackage`<sup>Required</sup> <a name="threatCampaignsPackage" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.threatCampaignsPackage"></a>

```typescript
public readonly threatCampaignsPackage: DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList">DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentWebApplicationFirewallStatus;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatus">DataAzurermNginxDeploymentWebApplicationFirewallStatus</a>

---


### DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.get"></a>

```typescript
public get(index: number): DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference <a name="DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer"></a>

```typescript
import { dataAzurermNginxDeployment } from '@cdktf/provider-azurerm'

new dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.revisionDatetime">revisionDatetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage">DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revisionDatetime`<sup>Required</sup> <a name="revisionDatetime" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.revisionDatetime"></a>

```typescript
public readonly revisionDatetime: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNginxDeployment.DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage">DataAzurermNginxDeploymentWebApplicationFirewallStatusThreatCampaignsPackage</a>

---



