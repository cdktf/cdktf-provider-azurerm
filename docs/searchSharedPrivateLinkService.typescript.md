# `azurerm_search_shared_private_link_service`

Refer to the Terraform Registory for docs: [`azurerm_search_shared_private_link_service`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service).

# `searchSharedPrivateLinkService` Submodule <a name="`searchSharedPrivateLinkService` Submodule" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SearchSharedPrivateLinkService <a name="SearchSharedPrivateLinkService" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service azurerm_search_shared_private_link_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer"></a>

```typescript
import { searchSharedPrivateLinkService } from '@cdktf/provider-azurerm'

new searchSharedPrivateLinkService.SearchSharedPrivateLinkService(scope: Construct, id: string, config: SearchSharedPrivateLinkServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig">SearchSharedPrivateLinkServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig">SearchSharedPrivateLinkServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetRequestMessage">resetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.putTimeouts"></a>

```typescript
public putTimeouts(value: SearchSharedPrivateLinkServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRequestMessage` <a name="resetRequestMessage" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetRequestMessage"></a>

```typescript
public resetRequestMessage(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SearchSharedPrivateLinkService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isConstruct"></a>

```typescript
import { searchSharedPrivateLinkService } from '@cdktf/provider-azurerm'

searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformElement"></a>

```typescript
import { searchSharedPrivateLinkService } from '@cdktf/provider-azurerm'

searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformResource"></a>

```typescript
import { searchSharedPrivateLinkService } from '@cdktf/provider-azurerm'

searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport"></a>

```typescript
import { searchSharedPrivateLinkService } from '@cdktf/provider-azurerm'

searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SearchSharedPrivateLinkService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SearchSharedPrivateLinkService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SearchSharedPrivateLinkService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SearchSharedPrivateLinkService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference">SearchSharedPrivateLinkServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessageInput">requestMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceIdInput">searchServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceNameInput">subresourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessage">requestMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceId">searchServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceName">subresourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeouts"></a>

```typescript
public readonly timeouts: SearchSharedPrivateLinkServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference">SearchSharedPrivateLinkServiceTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requestMessageInput`<sup>Optional</sup> <a name="requestMessageInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessageInput"></a>

```typescript
public readonly requestMessageInput: string;
```

- *Type:* string

---

##### `searchServiceIdInput`<sup>Optional</sup> <a name="searchServiceIdInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceIdInput"></a>

```typescript
public readonly searchServiceIdInput: string;
```

- *Type:* string

---

##### `subresourceNameInput`<sup>Optional</sup> <a name="subresourceNameInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceNameInput"></a>

```typescript
public readonly subresourceNameInput: string;
```

- *Type:* string

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceIdInput"></a>

```typescript
public readonly targetResourceIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SearchSharedPrivateLinkServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestMessage`<sup>Required</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.requestMessage"></a>

```typescript
public readonly requestMessage: string;
```

- *Type:* string

---

##### `searchServiceId`<sup>Required</sup> <a name="searchServiceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.searchServiceId"></a>

```typescript
public readonly searchServiceId: string;
```

- *Type:* string

---

##### `subresourceName`<sup>Required</sup> <a name="subresourceName" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.subresourceName"></a>

```typescript
public readonly subresourceName: string;
```

- *Type:* string

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SearchSharedPrivateLinkServiceConfig <a name="SearchSharedPrivateLinkServiceConfig" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.Initializer"></a>

```typescript
import { searchSharedPrivateLinkService } from '@cdktf/provider-azurerm'

const searchSharedPrivateLinkServiceConfig: searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#name SearchSharedPrivateLinkService#name}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.searchServiceId">searchServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#search_service_id SearchSharedPrivateLinkService#search_service_id}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.subresourceName">subresourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#subresource_name SearchSharedPrivateLinkService#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.targetResourceId">targetResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#target_resource_id SearchSharedPrivateLinkService#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#id SearchSharedPrivateLinkService#id}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.requestMessage">requestMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#request_message SearchSharedPrivateLinkService#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#name SearchSharedPrivateLinkService#name}.

---

##### `searchServiceId`<sup>Required</sup> <a name="searchServiceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.searchServiceId"></a>

```typescript
public readonly searchServiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#search_service_id SearchSharedPrivateLinkService#search_service_id}.

---

##### `subresourceName`<sup>Required</sup> <a name="subresourceName" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.subresourceName"></a>

```typescript
public readonly subresourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#subresource_name SearchSharedPrivateLinkService#subresource_name}.

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.targetResourceId"></a>

```typescript
public readonly targetResourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#target_resource_id SearchSharedPrivateLinkService#target_resource_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#id SearchSharedPrivateLinkService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `requestMessage`<sup>Optional</sup> <a name="requestMessage" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.requestMessage"></a>

```typescript
public readonly requestMessage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#request_message SearchSharedPrivateLinkService#request_message}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SearchSharedPrivateLinkServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#timeouts SearchSharedPrivateLinkService#timeouts}

---

### SearchSharedPrivateLinkServiceTimeouts <a name="SearchSharedPrivateLinkServiceTimeouts" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.Initializer"></a>

```typescript
import { searchSharedPrivateLinkService } from '@cdktf/provider-azurerm'

const searchSharedPrivateLinkServiceTimeouts: searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#create SearchSharedPrivateLinkService#create}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#delete SearchSharedPrivateLinkService#delete}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#read SearchSharedPrivateLinkService#read}. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#update SearchSharedPrivateLinkService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#create SearchSharedPrivateLinkService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#delete SearchSharedPrivateLinkService#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#read SearchSharedPrivateLinkService#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/search_shared_private_link_service#update SearchSharedPrivateLinkService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SearchSharedPrivateLinkServiceTimeoutsOutputReference <a name="SearchSharedPrivateLinkServiceTimeoutsOutputReference" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { searchSharedPrivateLinkService } from '@cdktf/provider-azurerm'

new searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SearchSharedPrivateLinkServiceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.searchSharedPrivateLinkService.SearchSharedPrivateLinkServiceTimeouts">SearchSharedPrivateLinkServiceTimeouts</a>

---



