# `azurerm_web_pubsub_network_acl`

Refer to the Terraform Registory for docs: [`azurerm_web_pubsub_network_acl`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl).

# `webPubsubNetworkAcl` Submodule <a name="`webPubsubNetworkAcl` Submodule" id="@cdktf/provider-azurerm.webPubsubNetworkAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubNetworkAcl <a name="WebPubsubNetworkAcl" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl azurerm_web_pubsub_network_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

new webPubsubNetworkAcl.WebPubsubNetworkAcl(scope: Construct, id: string, config: WebPubsubNetworkAclConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig">WebPubsubNetworkAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig">WebPubsubNetworkAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPrivateEndpoint">putPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPublicNetwork">putPublicNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetDefaultAction">resetDefaultAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetPrivateEndpoint">resetPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putPrivateEndpoint` <a name="putPrivateEndpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPrivateEndpoint"></a>

```typescript
public putPrivateEndpoint(value: IResolvable | WebPubsubNetworkAclPrivateEndpoint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPrivateEndpoint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>[]

---

##### `putPublicNetwork` <a name="putPublicNetwork" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPublicNetwork"></a>

```typescript
public putPublicNetwork(value: WebPubsubNetworkAclPublicNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putPublicNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts"></a>

```typescript
public putTimeouts(value: WebPubsubNetworkAclTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>

---

##### `resetDefaultAction` <a name="resetDefaultAction" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetDefaultAction"></a>

```typescript
public resetDefaultAction(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivateEndpoint` <a name="resetPrivateEndpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetPrivateEndpoint"></a>

```typescript
public resetPrivateEndpoint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WebPubsubNetworkAcl resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isConstruct"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

webPubsubNetworkAcl.WebPubsubNetworkAcl.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformElement"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformResource"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.generateConfigForImport"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

webPubsubNetworkAcl.WebPubsubNetworkAcl.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WebPubsubNetworkAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WebPubsubNetworkAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WebPubsubNetworkAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WebPubsubNetworkAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList">WebPubsubNetworkAclPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetwork">publicNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference">WebPubsubNetworkAclPublicNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference">WebPubsubNetworkAclTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultActionInput">defaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpointInput">privateEndpointInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetworkInput">publicNetworkInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubIdInput">webPubsubIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultAction">defaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubId">webPubsubId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: WebPubsubNetworkAclPrivateEndpointList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList">WebPubsubNetworkAclPrivateEndpointList</a>

---

##### `publicNetwork`<sup>Required</sup> <a name="publicNetwork" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetwork"></a>

```typescript
public readonly publicNetwork: WebPubsubNetworkAclPublicNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference">WebPubsubNetworkAclPublicNetworkOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeouts"></a>

```typescript
public readonly timeouts: WebPubsubNetworkAclTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference">WebPubsubNetworkAclTimeoutsOutputReference</a>

---

##### `defaultActionInput`<sup>Optional</sup> <a name="defaultActionInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultActionInput"></a>

```typescript
public readonly defaultActionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateEndpointInput`<sup>Optional</sup> <a name="privateEndpointInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.privateEndpointInput"></a>

```typescript
public readonly privateEndpointInput: IResolvable | WebPubsubNetworkAclPrivateEndpoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>[]

---

##### `publicNetworkInput`<sup>Optional</sup> <a name="publicNetworkInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.publicNetworkInput"></a>

```typescript
public readonly publicNetworkInput: WebPubsubNetworkAclPublicNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WebPubsubNetworkAclTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>

---

##### `webPubsubIdInput`<sup>Optional</sup> <a name="webPubsubIdInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubIdInput"></a>

```typescript
public readonly webPubsubIdInput: string;
```

- *Type:* string

---

##### `defaultAction`<sup>Required</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `webPubsubId`<sup>Required</sup> <a name="webPubsubId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.webPubsubId"></a>

```typescript
public readonly webPubsubId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAcl.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubNetworkAclConfig <a name="WebPubsubNetworkAclConfig" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.Initializer"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

const webPubsubNetworkAclConfig: webPubsubNetworkAcl.WebPubsubNetworkAclConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.publicNetwork">publicNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a></code> | public_network block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.webPubsubId">webPubsubId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#web_pubsub_id WebPubsubNetworkAcl#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.defaultAction">defaultAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#default_action WebPubsubNetworkAcl#default_action}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.privateEndpoint">privateEndpoint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>[]</code> | private_endpoint block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `publicNetwork`<sup>Required</sup> <a name="publicNetwork" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.publicNetwork"></a>

```typescript
public readonly publicNetwork: WebPubsubNetworkAclPublicNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

public_network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#public_network WebPubsubNetworkAcl#public_network}

---

##### `webPubsubId`<sup>Required</sup> <a name="webPubsubId" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.webPubsubId"></a>

```typescript
public readonly webPubsubId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#web_pubsub_id WebPubsubNetworkAcl#web_pubsub_id}.

---

##### `defaultAction`<sup>Optional</sup> <a name="defaultAction" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.defaultAction"></a>

```typescript
public readonly defaultAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#default_action WebPubsubNetworkAcl#default_action}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privateEndpoint`<sup>Optional</sup> <a name="privateEndpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: IResolvable | WebPubsubNetworkAclPrivateEndpoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>[]

private_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#private_endpoint WebPubsubNetworkAcl#private_endpoint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WebPubsubNetworkAclTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#timeouts WebPubsubNetworkAcl#timeouts}

---

### WebPubsubNetworkAclPrivateEndpoint <a name="WebPubsubNetworkAclPrivateEndpoint" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.Initializer"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

const webPubsubNetworkAclPrivateEndpoint: webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.allowedRequestTypes">allowedRequestTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.deniedRequestTypes">deniedRequestTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#id WebPubsubNetworkAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `allowedRequestTypes`<sup>Optional</sup> <a name="allowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.allowedRequestTypes"></a>

```typescript
public readonly allowedRequestTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}.

---

##### `deniedRequestTypes`<sup>Optional</sup> <a name="deniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint.property.deniedRequestTypes"></a>

```typescript
public readonly deniedRequestTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}.

---

### WebPubsubNetworkAclPublicNetwork <a name="WebPubsubNetworkAclPublicNetwork" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.Initializer"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

const webPubsubNetworkAclPublicNetwork: webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.allowedRequestTypes">allowedRequestTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.deniedRequestTypes">deniedRequestTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}. |

---

##### `allowedRequestTypes`<sup>Optional</sup> <a name="allowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.allowedRequestTypes"></a>

```typescript
public readonly allowedRequestTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#allowed_request_types WebPubsubNetworkAcl#allowed_request_types}.

---

##### `deniedRequestTypes`<sup>Optional</sup> <a name="deniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork.property.deniedRequestTypes"></a>

```typescript
public readonly deniedRequestTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#denied_request_types WebPubsubNetworkAcl#denied_request_types}.

---

### WebPubsubNetworkAclTimeouts <a name="WebPubsubNetworkAclTimeouts" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.Initializer"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

const webPubsubNetworkAclTimeouts: webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#create WebPubsubNetworkAcl#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#delete WebPubsubNetworkAcl#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#read WebPubsubNetworkAcl#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#update WebPubsubNetworkAcl#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#create WebPubsubNetworkAcl#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#delete WebPubsubNetworkAcl#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#read WebPubsubNetworkAcl#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/web_pubsub_network_acl#update WebPubsubNetworkAcl#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubNetworkAclPrivateEndpointList <a name="WebPubsubNetworkAclPrivateEndpointList" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

new webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.get"></a>

```typescript
public get(index: number): WebPubsubNetworkAclPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WebPubsubNetworkAclPrivateEndpoint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>[]

---


### WebPubsubNetworkAclPrivateEndpointOutputReference <a name="WebPubsubNetworkAclPrivateEndpointOutputReference" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

new webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetAllowedRequestTypes">resetAllowedRequestTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetDeniedRequestTypes">resetDeniedRequestTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRequestTypes` <a name="resetAllowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetAllowedRequestTypes"></a>

```typescript
public resetAllowedRequestTypes(): void
```

##### `resetDeniedRequestTypes` <a name="resetDeniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.resetDeniedRequestTypes"></a>

```typescript
public resetDeniedRequestTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypesInput">allowedRequestTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypesInput">deniedRequestTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypes">allowedRequestTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypes">deniedRequestTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRequestTypesInput`<sup>Optional</sup> <a name="allowedRequestTypesInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypesInput"></a>

```typescript
public readonly allowedRequestTypesInput: string[];
```

- *Type:* string[]

---

##### `deniedRequestTypesInput`<sup>Optional</sup> <a name="deniedRequestTypesInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypesInput"></a>

```typescript
public readonly deniedRequestTypesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `allowedRequestTypes`<sup>Required</sup> <a name="allowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.allowedRequestTypes"></a>

```typescript
public readonly allowedRequestTypes: string[];
```

- *Type:* string[]

---

##### `deniedRequestTypes`<sup>Required</sup> <a name="deniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.deniedRequestTypes"></a>

```typescript
public readonly deniedRequestTypes: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WebPubsubNetworkAclPrivateEndpoint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPrivateEndpoint">WebPubsubNetworkAclPrivateEndpoint</a>

---


### WebPubsubNetworkAclPublicNetworkOutputReference <a name="WebPubsubNetworkAclPublicNetworkOutputReference" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

new webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetAllowedRequestTypes">resetAllowedRequestTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetDeniedRequestTypes">resetDeniedRequestTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedRequestTypes` <a name="resetAllowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetAllowedRequestTypes"></a>

```typescript
public resetAllowedRequestTypes(): void
```

##### `resetDeniedRequestTypes` <a name="resetDeniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.resetDeniedRequestTypes"></a>

```typescript
public resetDeniedRequestTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypesInput">allowedRequestTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypesInput">deniedRequestTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypes">allowedRequestTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypes">deniedRequestTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedRequestTypesInput`<sup>Optional</sup> <a name="allowedRequestTypesInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypesInput"></a>

```typescript
public readonly allowedRequestTypesInput: string[];
```

- *Type:* string[]

---

##### `deniedRequestTypesInput`<sup>Optional</sup> <a name="deniedRequestTypesInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypesInput"></a>

```typescript
public readonly deniedRequestTypesInput: string[];
```

- *Type:* string[]

---

##### `allowedRequestTypes`<sup>Required</sup> <a name="allowedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.allowedRequestTypes"></a>

```typescript
public readonly allowedRequestTypes: string[];
```

- *Type:* string[]

---

##### `deniedRequestTypes`<sup>Required</sup> <a name="deniedRequestTypes" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.deniedRequestTypes"></a>

```typescript
public readonly deniedRequestTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WebPubsubNetworkAclPublicNetwork;
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclPublicNetwork">WebPubsubNetworkAclPublicNetwork</a>

---


### WebPubsubNetworkAclTimeoutsOutputReference <a name="WebPubsubNetworkAclTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer"></a>

```typescript
import { webPubsubNetworkAcl } from '@cdktf/provider-azurerm'

new webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WebPubsubNetworkAclTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.webPubsubNetworkAcl.WebPubsubNetworkAclTimeouts">WebPubsubNetworkAclTimeouts</a>

---



