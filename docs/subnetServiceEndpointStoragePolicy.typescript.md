# `subnetServiceEndpointStoragePolicy` Submodule <a name="`subnetServiceEndpointStoragePolicy` Submodule" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SubnetServiceEndpointStoragePolicy <a name="SubnetServiceEndpointStoragePolicy" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy azurerm_subnet_service_endpoint_storage_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer"></a>

```typescript
import { subnetServiceEndpointStoragePolicy } from '@cdktf/provider-azurerm'

new subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy(scope: Construct, id: string, config: SubnetServiceEndpointStoragePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig">SubnetServiceEndpointStoragePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig">SubnetServiceEndpointStoragePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition">putDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putDefinition` <a name="putDefinition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition"></a>

```typescript
public putDefinition(value: IResolvable | SubnetServiceEndpointStoragePolicyDefinition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putDefinition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: SubnetServiceEndpointStoragePolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>

---

##### `resetDefinition` <a name="resetDefinition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetDefinition"></a>

```typescript
public resetDefinition(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SubnetServiceEndpointStoragePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct"></a>

```typescript
import { subnetServiceEndpointStoragePolicy } from '@cdktf/provider-azurerm'

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement"></a>

```typescript
import { subnetServiceEndpointStoragePolicy } from '@cdktf/provider-azurerm'

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource"></a>

```typescript
import { subnetServiceEndpointStoragePolicy } from '@cdktf/provider-azurerm'

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport"></a>

```typescript
import { subnetServiceEndpointStoragePolicy } from '@cdktf/provider-azurerm'

subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SubnetServiceEndpointStoragePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SubnetServiceEndpointStoragePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SubnetServiceEndpointStoragePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SubnetServiceEndpointStoragePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definition">definition</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList">SubnetServiceEndpointStoragePolicyDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference">SubnetServiceEndpointStoragePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definitionInput">definitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definition"></a>

```typescript
public readonly definition: SubnetServiceEndpointStoragePolicyDefinitionList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList">SubnetServiceEndpointStoragePolicyDefinitionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetServiceEndpointStoragePolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference">SubnetServiceEndpointStoragePolicyTimeoutsOutputReference</a>

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.definitionInput"></a>

```typescript
public readonly definitionInput: IResolvable | SubnetServiceEndpointStoragePolicyDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SubnetServiceEndpointStoragePolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SubnetServiceEndpointStoragePolicyConfig <a name="SubnetServiceEndpointStoragePolicyConfig" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.Initializer"></a>

```typescript
import { subnetServiceEndpointStoragePolicy } from '@cdktf/provider-azurerm'

const subnetServiceEndpointStoragePolicyConfig: subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#location SubnetServiceEndpointStoragePolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#resource_group_name SubnetServiceEndpointStoragePolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.definition">definition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>[]</code> | definition block. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#id SubnetServiceEndpointStoragePolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#tags SubnetServiceEndpointStoragePolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#location SubnetServiceEndpointStoragePolicy#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#resource_group_name SubnetServiceEndpointStoragePolicy#resource_group_name}.

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.definition"></a>

```typescript
public readonly definition: IResolvable | SubnetServiceEndpointStoragePolicyDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>[]

definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#definition SubnetServiceEndpointStoragePolicy#definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#id SubnetServiceEndpointStoragePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#tags SubnetServiceEndpointStoragePolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SubnetServiceEndpointStoragePolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#timeouts SubnetServiceEndpointStoragePolicy#timeouts}

---

### SubnetServiceEndpointStoragePolicyDefinition <a name="SubnetServiceEndpointStoragePolicyDefinition" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.Initializer"></a>

```typescript
import { subnetServiceEndpointStoragePolicy } from '@cdktf/provider-azurerm'

const subnetServiceEndpointStoragePolicyDefinition: subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.serviceResources">serviceResources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#service_resources SubnetServiceEndpointStoragePolicy#service_resources}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#description SubnetServiceEndpointStoragePolicy#description}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.service">service</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#service SubnetServiceEndpointStoragePolicy#service}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#name SubnetServiceEndpointStoragePolicy#name}.

---

##### `serviceResources`<sup>Required</sup> <a name="serviceResources" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.serviceResources"></a>

```typescript
public readonly serviceResources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#service_resources SubnetServiceEndpointStoragePolicy#service_resources}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#description SubnetServiceEndpointStoragePolicy#description}.

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#service SubnetServiceEndpointStoragePolicy#service}.

---

### SubnetServiceEndpointStoragePolicyTimeouts <a name="SubnetServiceEndpointStoragePolicyTimeouts" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.Initializer"></a>

```typescript
import { subnetServiceEndpointStoragePolicy } from '@cdktf/provider-azurerm'

const subnetServiceEndpointStoragePolicyTimeouts: subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#create SubnetServiceEndpointStoragePolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#delete SubnetServiceEndpointStoragePolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#read SubnetServiceEndpointStoragePolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#update SubnetServiceEndpointStoragePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#create SubnetServiceEndpointStoragePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#delete SubnetServiceEndpointStoragePolicy#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#read SubnetServiceEndpointStoragePolicy#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/subnet_service_endpoint_storage_policy#update SubnetServiceEndpointStoragePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SubnetServiceEndpointStoragePolicyDefinitionList <a name="SubnetServiceEndpointStoragePolicyDefinitionList" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer"></a>

```typescript
import { subnetServiceEndpointStoragePolicy } from '@cdktf/provider-azurerm'

new subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get"></a>

```typescript
public get(index: number): SubnetServiceEndpointStoragePolicyDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SubnetServiceEndpointStoragePolicyDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>[]

---


### SubnetServiceEndpointStoragePolicyDefinitionOutputReference <a name="SubnetServiceEndpointStoragePolicyDefinitionOutputReference" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer"></a>

```typescript
import { subnetServiceEndpointStoragePolicy } from '@cdktf/provider-azurerm'

new subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetService` <a name="resetService" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.resetService"></a>

```typescript
public resetService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResourcesInput">serviceResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResources">serviceResources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `serviceResourcesInput`<sup>Optional</sup> <a name="serviceResourcesInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResourcesInput"></a>

```typescript
public readonly serviceResourcesInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceResources`<sup>Required</sup> <a name="serviceResources" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.serviceResources"></a>

```typescript
public readonly serviceResources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SubnetServiceEndpointStoragePolicyDefinition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyDefinition">SubnetServiceEndpointStoragePolicyDefinition</a>

---


### SubnetServiceEndpointStoragePolicyTimeoutsOutputReference <a name="SubnetServiceEndpointStoragePolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { subnetServiceEndpointStoragePolicy } from '@cdktf/provider-azurerm'

new subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SubnetServiceEndpointStoragePolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.subnetServiceEndpointStoragePolicy.SubnetServiceEndpointStoragePolicyTimeouts">SubnetServiceEndpointStoragePolicyTimeouts</a>

---



