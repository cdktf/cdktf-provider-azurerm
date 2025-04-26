# `dataAzurermContainerRegistryCacheRule` Submodule <a name="`dataAzurermContainerRegistryCacheRule` Submodule" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermContainerRegistryCacheRule <a name="DataAzurermContainerRegistryCacheRule" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/container_registry_cache_rule azurerm_container_registry_cache_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.Initializer"></a>

```typescript
import { dataAzurermContainerRegistryCacheRule } from '@cdktf/provider-azurerm'

new dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule(scope: Construct, id: string, config: DataAzurermContainerRegistryCacheRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig">DataAzurermContainerRegistryCacheRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig">DataAzurermContainerRegistryCacheRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermContainerRegistryCacheRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts">DataAzurermContainerRegistryCacheRuleTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermContainerRegistryCacheRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isConstruct"></a>

```typescript
import { dataAzurermContainerRegistryCacheRule } from '@cdktf/provider-azurerm'

dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isTerraformElement"></a>

```typescript
import { dataAzurermContainerRegistryCacheRule } from '@cdktf/provider-azurerm'

dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isTerraformDataSource"></a>

```typescript
import { dataAzurermContainerRegistryCacheRule } from '@cdktf/provider-azurerm'

dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.generateConfigForImport"></a>

```typescript
import { dataAzurermContainerRegistryCacheRule } from '@cdktf/provider-azurerm'

dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermContainerRegistryCacheRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermContainerRegistryCacheRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermContainerRegistryCacheRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/container_registry_cache_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermContainerRegistryCacheRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.credentialSetId">credentialSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.sourceRepo">sourceRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.targetRepo">targetRepo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference">DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.containerRegistryIdInput">containerRegistryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts">DataAzurermContainerRegistryCacheRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.containerRegistryId">containerRegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `credentialSetId`<sup>Required</sup> <a name="credentialSetId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.credentialSetId"></a>

```typescript
public readonly credentialSetId: string;
```

- *Type:* string

---

##### `sourceRepo`<sup>Required</sup> <a name="sourceRepo" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.sourceRepo"></a>

```typescript
public readonly sourceRepo: string;
```

- *Type:* string

---

##### `targetRepo`<sup>Required</sup> <a name="targetRepo" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.targetRepo"></a>

```typescript
public readonly targetRepo: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference">DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference</a>

---

##### `containerRegistryIdInput`<sup>Optional</sup> <a name="containerRegistryIdInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.containerRegistryIdInput"></a>

```typescript
public readonly containerRegistryIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermContainerRegistryCacheRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts">DataAzurermContainerRegistryCacheRuleTimeouts</a>

---

##### `containerRegistryId`<sup>Required</sup> <a name="containerRegistryId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.containerRegistryId"></a>

```typescript
public readonly containerRegistryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermContainerRegistryCacheRuleConfig <a name="DataAzurermContainerRegistryCacheRuleConfig" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.Initializer"></a>

```typescript
import { dataAzurermContainerRegistryCacheRule } from '@cdktf/provider-azurerm'

const dataAzurermContainerRegistryCacheRuleConfig: dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.containerRegistryId">containerRegistryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/container_registry_cache_rule#container_registry_id DataAzurermContainerRegistryCacheRule#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/container_registry_cache_rule#name DataAzurermContainerRegistryCacheRule#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/container_registry_cache_rule#id DataAzurermContainerRegistryCacheRule#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts">DataAzurermContainerRegistryCacheRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerRegistryId`<sup>Required</sup> <a name="containerRegistryId" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.containerRegistryId"></a>

```typescript
public readonly containerRegistryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/container_registry_cache_rule#container_registry_id DataAzurermContainerRegistryCacheRule#container_registry_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/container_registry_cache_rule#name DataAzurermContainerRegistryCacheRule#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/container_registry_cache_rule#id DataAzurermContainerRegistryCacheRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermContainerRegistryCacheRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts">DataAzurermContainerRegistryCacheRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/container_registry_cache_rule#timeouts DataAzurermContainerRegistryCacheRule#timeouts}

---

### DataAzurermContainerRegistryCacheRuleTimeouts <a name="DataAzurermContainerRegistryCacheRuleTimeouts" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts.Initializer"></a>

```typescript
import { dataAzurermContainerRegistryCacheRule } from '@cdktf/provider-azurerm'

const dataAzurermContainerRegistryCacheRuleTimeouts: dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/container_registry_cache_rule#read DataAzurermContainerRegistryCacheRule#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.27.0/docs/data-sources/container_registry_cache_rule#read DataAzurermContainerRegistryCacheRule#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference <a name="DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermContainerRegistryCacheRule } from '@cdktf/provider-azurerm'

new dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts">DataAzurermContainerRegistryCacheRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermContainerRegistryCacheRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermContainerRegistryCacheRule.DataAzurermContainerRegistryCacheRuleTimeouts">DataAzurermContainerRegistryCacheRuleTimeouts</a>

---



