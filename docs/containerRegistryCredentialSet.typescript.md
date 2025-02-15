# `containerRegistryCredentialSet` Submodule <a name="`containerRegistryCredentialSet` Submodule" id="@cdktf/provider-azurerm.containerRegistryCredentialSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerRegistryCredentialSet <a name="ContainerRegistryCredentialSet" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set azurerm_container_registry_credential_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

new containerRegistryCredentialSet.ContainerRegistryCredentialSet(scope: Construct, id: string, config: ContainerRegistryCredentialSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig">ContainerRegistryCredentialSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig">ContainerRegistryCredentialSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putAuthenticationCredentials">putAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticationCredentials` <a name="putAuthenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putAuthenticationCredentials"></a>

```typescript
public putAuthenticationCredentials(value: ContainerRegistryCredentialSetAuthenticationCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putAuthenticationCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putIdentity"></a>

```typescript
public putIdentity(value: ContainerRegistryCredentialSetIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putTimeouts"></a>

```typescript
public putTimeouts(value: ContainerRegistryCredentialSetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerRegistryCredentialSet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isConstruct"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

containerRegistryCredentialSet.ContainerRegistryCredentialSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformElement"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformResource"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ContainerRegistryCredentialSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ContainerRegistryCredentialSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ContainerRegistryCredentialSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ContainerRegistryCredentialSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentials">authenticationCredentials</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference">ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference">ContainerRegistryCredentialSetIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference">ContainerRegistryCredentialSetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentialsInput">authenticationCredentialsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryIdInput">containerRegistryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServerInput">loginServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryId">containerRegistryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServer">loginServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticationCredentials`<sup>Required</sup> <a name="authenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentials"></a>

```typescript
public readonly authenticationCredentials: ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference">ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identity"></a>

```typescript
public readonly identity: ContainerRegistryCredentialSetIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference">ContainerRegistryCredentialSetIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerRegistryCredentialSetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference">ContainerRegistryCredentialSetTimeoutsOutputReference</a>

---

##### `authenticationCredentialsInput`<sup>Optional</sup> <a name="authenticationCredentialsInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.authenticationCredentialsInput"></a>

```typescript
public readonly authenticationCredentialsInput: ContainerRegistryCredentialSetAuthenticationCredentials;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

---

##### `containerRegistryIdInput`<sup>Optional</sup> <a name="containerRegistryIdInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryIdInput"></a>

```typescript
public readonly containerRegistryIdInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.identityInput"></a>

```typescript
public readonly identityInput: ContainerRegistryCredentialSetIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loginServerInput`<sup>Optional</sup> <a name="loginServerInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServerInput"></a>

```typescript
public readonly loginServerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ContainerRegistryCredentialSetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a>

---

##### `containerRegistryId`<sup>Required</sup> <a name="containerRegistryId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.containerRegistryId"></a>

```typescript
public readonly containerRegistryId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loginServer`<sup>Required</sup> <a name="loginServer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.loginServer"></a>

```typescript
public readonly loginServer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerRegistryCredentialSetAuthenticationCredentials <a name="ContainerRegistryCredentialSetAuthenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.Initializer"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

const containerRegistryCredentialSetAuthenticationCredentials: containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#password_secret_id ContainerRegistryCredentialSet#password_secret_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.usernameSecretId">usernameSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#username_secret_id ContainerRegistryCredentialSet#username_secret_id}. |

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#password_secret_id ContainerRegistryCredentialSet#password_secret_id}.

---

##### `usernameSecretId`<sup>Required</sup> <a name="usernameSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials.property.usernameSecretId"></a>

```typescript
public readonly usernameSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#username_secret_id ContainerRegistryCredentialSet#username_secret_id}.

---

### ContainerRegistryCredentialSetConfig <a name="ContainerRegistryCredentialSetConfig" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.Initializer"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

const containerRegistryCredentialSetConfig: containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.authenticationCredentials">authenticationCredentials</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a></code> | authentication_credentials block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.containerRegistryId">containerRegistryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#container_registry_id ContainerRegistryCredentialSet#container_registry_id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.loginServer">loginServer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#login_server ContainerRegistryCredentialSet#login_server}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.name">name</a></code> | <code>string</code> | The name of the credential set. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#id ContainerRegistryCredentialSet#id}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `authenticationCredentials`<sup>Required</sup> <a name="authenticationCredentials" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.authenticationCredentials"></a>

```typescript
public readonly authenticationCredentials: ContainerRegistryCredentialSetAuthenticationCredentials;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

authentication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#authentication_credentials ContainerRegistryCredentialSet#authentication_credentials}

---

##### `containerRegistryId`<sup>Required</sup> <a name="containerRegistryId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.containerRegistryId"></a>

```typescript
public readonly containerRegistryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#container_registry_id ContainerRegistryCredentialSet#container_registry_id}.

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.identity"></a>

```typescript
public readonly identity: ContainerRegistryCredentialSetIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#identity ContainerRegistryCredentialSet#identity}

---

##### `loginServer`<sup>Required</sup> <a name="loginServer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.loginServer"></a>

```typescript
public readonly loginServer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#login_server ContainerRegistryCredentialSet#login_server}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the credential set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#name ContainerRegistryCredentialSet#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#id ContainerRegistryCredentialSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ContainerRegistryCredentialSetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#timeouts ContainerRegistryCredentialSet#timeouts}

---

### ContainerRegistryCredentialSetIdentity <a name="ContainerRegistryCredentialSetIdentity" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity.Initializer"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

const containerRegistryCredentialSetIdentity: containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#type ContainerRegistryCredentialSet#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#type ContainerRegistryCredentialSet#type}.

---

### ContainerRegistryCredentialSetTimeouts <a name="ContainerRegistryCredentialSetTimeouts" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.Initializer"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

const containerRegistryCredentialSetTimeouts: containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#create ContainerRegistryCredentialSet#create}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#delete ContainerRegistryCredentialSet#delete}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#read ContainerRegistryCredentialSet#read}. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#update ContainerRegistryCredentialSet#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#create ContainerRegistryCredentialSet#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#delete ContainerRegistryCredentialSet#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#read ContainerRegistryCredentialSet#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.19.0/docs/resources/container_registry_credential_set#update ContainerRegistryCredentialSet#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference <a name="ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

new containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretIdInput">usernameSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretId">usernameSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `usernameSecretIdInput`<sup>Optional</sup> <a name="usernameSecretIdInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretIdInput"></a>

```typescript
public readonly usernameSecretIdInput: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `usernameSecretId`<sup>Required</sup> <a name="usernameSecretId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.usernameSecretId"></a>

```typescript
public readonly usernameSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerRegistryCredentialSetAuthenticationCredentials;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetAuthenticationCredentials">ContainerRegistryCredentialSetAuthenticationCredentials</a>

---


### ContainerRegistryCredentialSetIdentityOutputReference <a name="ContainerRegistryCredentialSetIdentityOutputReference" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

new containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.principalId">principalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ContainerRegistryCredentialSetIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetIdentity">ContainerRegistryCredentialSetIdentity</a>

---


### ContainerRegistryCredentialSetTimeoutsOutputReference <a name="ContainerRegistryCredentialSetTimeoutsOutputReference" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer"></a>

```typescript
import { containerRegistryCredentialSet } from '@cdktf/provider-azurerm'

new containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ContainerRegistryCredentialSetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.containerRegistryCredentialSet.ContainerRegistryCredentialSetTimeouts">ContainerRegistryCredentialSetTimeouts</a>

---



